import axios from 'axios'

export const getPokemons = () => {
    return async function(dispatch){
        let response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: 'GET_POKEMONS',
            payload: response.data
        })  
}}

export function getTypes() {
    return async function(dispatch) {
        try {
            const info = await axios.get("http://localhost:3001/types")
            return dispatch({ 
                type: 'GET_TYPES', 
                payload: info.data
            });
        } catch (error) {
            console.log(error)
        }
    };
}

export function getNamePokemons(name){
    return async function (dispatch){
        try{
            const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: 'GET_NAME_POKEMONS',
                payload: res.data
            })
        } catch (err){
            console.log(err)
        }
    }
}

export function postPokemon(payload) {
    return async function (dispatch) {
            try{
                const res = await axios.post("http://localhost:3001/pokemon",payload);
                console.log(res)
                return res;
            } catch (err){
                console.log(err)
            }
            
}
}


export function filterByType(payload){
    console.log(payload)
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }     
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type:'ORDER_BY_NAME',
        payload
    }
}
export function orderByAttack(payload) {
    console.log(payload)
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    }
}

export function getDetail(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/pokemons/" + id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function removeDetail() {
    return {
        type: 'REMOVE_DETAIL'
    }
}