import React from 'react';

import './Card.css'


export default function Card({name, sprite, types}) {
    console.log(types)
    return (
        <div className='container'>
          <div className='top'>
            <h2>{name && name.toUpperCase()}</h2>
          </div>
          <div className='img'>

            <img src={sprite} alt="img not found"/>
          </div>
            <div className='types'>
             {types.map((type) => {
              console.log(type)
            return (
              <div >
                <img
                  alt="Type"
                  src={require(`./pokeIcons/${type}.png`).default}
                  width={50}
                />
                <p>{type.toUpperCase()}</p>
              </div>
            );
          })}  
            </div>
            
           
        </div>
    );
}