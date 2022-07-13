import React from 'react';
import './Paginado.css';

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []

    for (let i = 1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){ //esta divison me da el numero de paginas que necesito para renderizar los pokemons
        pageNumbers.push(i)
    }

    return (
        <nav className='center'>
            <ul className='number'>

            
            {
                pageNumbers.length > 1 && pageNumbers.map(number => (
                    <ul  key={number}>
                        <button className='shkere' onClick ={(e) => paginado(number)}>{number}</button>
                    </ul>
                ))}

            </ul>    
            
        </nav>
    )
}