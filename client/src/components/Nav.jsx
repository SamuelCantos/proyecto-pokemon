import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons, filterByType, filterCreated,orderByName,orderByAttack } from "../actions";
import './Nav.css'
import pokebola from '../img/pokebola.png'
import SearchBar from './SearchBar';
import Paginado from './Paginado';
import { NavLink } from 'react-router-dom';

export default function Nav () {

    const dispatch = useDispatch()

    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(getPokemons())
    }


   
    
    return (
        <div className='nav'>
            <div className='nav-left'>
                <NavLink to={"/home"}>
                <img src={pokebola} alt='pokeball'></img>
                <p>Pokédex</p> 
                </NavLink>
                <div className='nav-middle'>
                    <SearchBar  />
                </div>  
            <div className='nav-right'>
                <button type='submit' onClick={handleClick}>Recargar Pokemons</button>
                <div className='right-agregar'>
                <NavLink to={"/pokemon"}>
                  <a className='nav-right-a'>Agregar Pokemon</a>
                </NavLink>
                </div>
            </div>
        </div>
        </div>
    )
}





// <Link className='crear' to = '/pokemon'>Crea tu Pokemon!</Link>