import React from 'react';
import { useSelector } from 'react-redux';

function Loading() {

   /*  const allPokemons = useSelector((state) => state.pokemons)  */
    return (
        <div className='loading' >
           <img  src = "https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"  alt="error" width={250}></img>
        </div>
    );
}

export default Loading;