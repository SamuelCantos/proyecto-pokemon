const axios = require ('axios')
const { Pokemon, Type } = require("../db");

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const apiInfo = async () => {
    const api1 = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const api2 = await axios.get(api1.data.next)

    const api1Info = api1.data.results;
    const api2Info = api2.data.results;

    const totalInfo = api1Info.concat(api2Info)

    const pokemonUrl = totalInfo.map(e => axios.get(e.url)) //url de cada pokemon (donde esta la info).
    const infoPokemons = Promise.all(pokemonUrl)
    .then(e => {
        let pokemon = e.map (e => e.data) //info de cada url.
        let info = [] //arreglo para guardar la info que se necesita de cada poke.
        pokemon.map(e => {
            info.push({
                id: e.id,
                name: e.name,
                hp: e.stats[0].base_stat,
                attack: e.stats[1].base_stat,
                defense: e.stats[2].base_stat,
                speed: e.stats[5].base_stat,
                height: e.height,
                weight: e.weight,
                sprite: e.sprites.versions["generation-v"]["black-white"].animated
                .front_default,
                types: e.types.length < 2 ? [{name: e.types[0].type.name}] : [{name: e.types[0].type.name}, {name: e.types[1].type.name}]
            })
        })
        return info;
    })
    return infoPokemons;
}

//pokemons db 
        const dbInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type, //para que busque la relacion entre videogame y genero.
            attributes: ["name"], //nos traemos solo el name, el id lo hace solito.
            through: {
                          attributes: [],
            },
        },
    });
   
//concateno los pok de la db y de la api  
}
const getAllPokemons = async () =>{
    const pokemonsApi = await apiInfo();
    const pokemonsDb = await dbInfo();
    const allPokemons = pokemonsApi.concat(pokemonsDb) 
    return allPokemons;
}

//RUTAS//RUTAS//RUTAS//RUTAS//RUTAS//

router.get('/pokemons', async (req, res) => {
    const name = req.query.name
    const pokemonsTotal = await getAllPokemons();
                    if (name){
        let pokemonName = await pokemonsTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
        pokemonName.length ? 
        res.status(200).send(pokemonName) : 
        res.status(404).send('Ese pokemon no existe')
    } else {
        res.status(200).send(pokemonsTotal)
    }
})

router.get('/pokemons/:id', async (req, res) => {
    const id = req.params.id 
    const totalPokemons = await getAllPokemons();

        if (id){
            const pokemonId = await totalPokemons.filter(e => e.id == id)
            pokemonId.length ? 
            res.status(200).send(pokemonId):
            res.status(404).send('No se encontro ese pokemon')
        }
   
})

router.get('/types', async (_req, res) => {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    const type = response.data.results
    const typeName = type.map((e) => e.name)
    typeName.map( (e) =>{
        
             Type.findOrCreate ({where: {name : e}})
        
    })
    res.status(200).send(typeName)
})

router.post('/pokemon', async (req, res) =>{ 
    try {
        let {name, hp, attack, defense, speed, height, weight, types, sprite} = req.body; //me traigo todo lo que me pide, del body 
        
            const createdPokemon = await Pokemon.create({
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                sprite,
                createdInDb : true
            });
            const createdDb = await Type.findAll({ //dentro de este modelo, encontra tal cosa.. 
                where: {name: types}
            });
            createdPokemon.addType(createdDb);
            return res.status(200).send('Pokemon creado')
        }     catch (error){
        console.log(error)
    }
})
module.exports = router;
