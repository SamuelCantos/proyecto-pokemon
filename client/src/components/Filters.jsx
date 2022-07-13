import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons, filterByType, filterCreated,orderByName,orderByAttack } from "../actions";

import './Filters.css'
import Paginado from './Paginado';

export default function Filters () {

    const dispatch = useDispatch()


    const [_order, setOrder] = useState("")
    const allPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, _setPokemonsPerPage] = useState(9);
    const indexOfLastPokemon = currentPage * pokemonsPerPage // 9
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // 0
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) //use MEMO

    useEffect(() => { 
        dispatch(getPokemons()); 
    }, [dispatch])

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    
    function handleFilterType(e){
        dispatch(filterByType(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleSort(e){
        dispatch(orderByName(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleSortAttack(e) {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(orderByAttack(e.target.value))
       
        setOrder(`Ordenado ${e.target.value}`)
    }
    return (
        <div>
                   {
                        currentPokemons &&
                        
                            <Paginado
                                pokemonsPerPage={pokemonsPerPage} 
                                allPokemons={allPokemons.length} 
                                paginado={paginado}
                            />
                        

                    }
             <div className="containerSelect">
                <select className = 'select' onChange = {e => {handleSort(e)}}>
                    <option value = ''> Alfabeticamente</option>
                    <option value = 'asc'>Ascendente</option>
                    <option value = 'desc'>Descendente</option>

                </select>
                <select className = 'select' onClick={e=>{handleSortAttack(e)}}>
                    <option value = ''>Ataque</option>
                    <option value = 'weak'>Ataque mas debil</option>
                    <option value = 'strong'>Ataque mas fuerte</option>
                </select>
                <select className = 'select' onChange = {e => handleFilterType(e)}>
                    <option value = 'all'>Todos</option>
                    <option value = 'fighting'>fighting</option>
                    <option value = 'normal'>normal</option>
                    <option value = 'flying'>flying</option>
                    <option value = 'poison'>poison</option>
                    <option value = 'ground'>ground</option>
                    <option value = 'rock'>rock</option>
                    <option value = 'bug'>bug</option>
                    <option value = 'ghost'>ghost</option>
                    <option value = 'steel'>steel</option>
                    <option value = 'fire'>fire</option>
                    <option value = 'water'>water</option>
                    <option value = 'grass'>grass</option>
                    <option value = 'electric'>electric</option>
                    <option value = 'psychic'>psychic</option>
                    <option value = 'ice'>ice</option>
                    <option value = 'dragon'>dragon</option>
                    <option value = 'dark'>dark</option>
                    <option value = 'fairy'>fairy</option>
                    <option value = 'unknown'>unknown</option>
                    <option value = 'shadow'>shadow</option>
                </select>
                <select className='select' onChange = {e => handleFilterCreated(e)}>
                    <option value = 'all'>Todos</option>
                    <option value = 'api'>Existente</option>
                    <option value = 'created'>Creados</option>
                </select>
                </div>

        </div>
    )
}