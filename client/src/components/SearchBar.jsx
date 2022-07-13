import React from 'react';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getNamePokemons, orderByName } from '../actions';
import pokebola from '../img/pokebola.png'
import './searchBar.css'

export default function SearchBar(){
    let dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
    }

    return (
        <div className='nav-middle'>
            <input className='input'
            height='100'
            maxLength="30"
            size= '50px'
            type = 'text'
            placeholder = 'Pokemon...' 
            onChange = {e=> handleInputChange(e)}
            />
            <button className='boton' type = 'submit' onClick = {e=> handleSubmit(e)} ><img src={pokebola}/></button>
        </div>
    )
}

/* 🔍️ */