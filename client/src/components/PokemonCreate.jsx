import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { postPokemon, getTypes } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import './PokemonCreate.css'


function validate(input){
    let errors={};
    if(!input.name){
        errors.name = 'Nombre tiene que ser completado.'
    } 
    return errors;
}

export default function PokemonCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const[errors,setErrors] = useState({})
    const types = useSelector((state) => state.types)

    const [input,setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        sprite: "",
        types: []
    })

    
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.value] : e.target.value
        }))
    }
    
    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types,e.target.value]
        })
    }
    
    function handleDelete(e){
        setInput({
            ...input,
            types : input.types.filter(el => el !== e)
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postPokemon(input))
        alert('Pokemon creado con exito!')
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            sprite: "",
            types: []
        })
        history.push('/home')
    }
    
    useEffect(() =>{
        dispatch(getTypes())
    },[dispatch])



return(
    
    <div className='pokemonCreate'>
    <Link to = '/home' className='botonCreate'>HOME</Link>
    <h1>Crea tu Pokemon!</h1>

    <div>
           
    <form className='form'  onSubmit={(e)=> handleSubmit(e)}>
        <li className='form-li'>
            <label className = 'label'>Nombre </label>
            <input className='inputs'
            type= 'text'
            value={input.name}
            name='name'
            onChange={(e) => handleChange(e)}
            />
            {errors.name && (
                <p className='error'>{errors.name}</p>
            )}
        </li>
        

        <li className='form-li'>
        <label className = 'label'> Vida </label>
            <input
            className='inputs'
            type= "number"
            value= {input.hp}
            name= "hp"
            onChange={(e) => handleChange(e)}
            />
       
        </li>
        <li className='form-li'>
        <label className = 'label'>Ataque  </label>
            <input
            className='inputs'
            type= "number"
            value= {input.attack}
            name= "attack"
            onChange={(e) => handleChange(e)}
            />
        </li>

        <li className='form-li'>
        <label className = 'label'>Defensa  </label>
            <input
            className='inputs'
            type= "number"
            value= {input.defense}
            name= "defense"
            onChange={(e) => handleChange(e)}
            />
        </li>
       
       <li className='form-li'>
        <label className = 'label'>Velocidad  </label>
            <input
            className='inputs'
            type= "number"
            value= {input.speed}
            name= "speed"
            onChange={(e) => handleChange(e)}
            />
       </li>
        
        <li className='form-li'>
        <label className = 'label'>Altura  </label>
            <input
            className='inputs'
            type= "number"
            value= {input.height}
            name= "height"
            onChange={(e) => handleChange(e)}/>
       
        </li>
        <li className='form-li'>

        <label className = 'label'>Peso  </label>
            <input
            className='inputs'
            type= "number"
            value= {input.weight}
            name= "weight"
            onChange={(e) => handleChange(e)}
            />
        
        </li>
        <li className='form-li'>

        <label className = 'label'>Imagen  </label>
            <input
            className='inputs'
            type= "text"
            value= {input.sprite}
            name= "sprite"
            onChange={(e) => handleChange(e)}
            />
        </li>
       
       <li className='form-li'>
        <label  className='label'>Tipos  </label>
            <select className='select' onChange={(e) => handleSelect(e)}>
                {types.map((e) => (
                    <option value={e}>{e}</option>
                ))}
            </select>
       </li>
        
    <div className='input-types'>

    {input.types.map( e => 

        <div className='pops'>
            <p>{e}</p>
            <button className = 'x' onClick={()=>handleDelete(e)}>X</button>
        </div>
    
    )}
     <button className='botonCreate' type='submit'>CREAR POKEMON</button>
    </div>
    </form>
    </div>



</div>
)
    }


    























    
    
  
