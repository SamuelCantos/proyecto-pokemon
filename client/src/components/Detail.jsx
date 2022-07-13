import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getPokemons, removeDetail } from '../actions';
import { useEffect } from 'react';
import Loading from './Loading';
import './Detail.css'
import sword from "../img/sword.png"
import heart from "../img/heart.png"
import feather from "../img/feather.png"
import height from "../img/height.png"
import weight from "../img/weight.png"
import shield from "../img/shield.png"
export default function Detail(props) {
    console.log(props)
    const dispatch = useDispatch()

    const myPokemon = useSelector((state) => state.detail)
    console.log(myPokemon)


    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getDetail(props.match.params.id));
        return () => dispatch(removeDetail())
    }, [dispatch, props.match.params.id])


    return (
        <div className='detail'>
            {
                myPokemon?.length > 0 ?
                    <div className='contenedorDetail'>
                        <div className='name-img'>
                            <h1>{myPokemon[0].name.toUpperCase()}</h1>
                            <img src={myPokemon[0].sprite} alt='' width='250px' height='250px' />
                        </div>
                        <div className='caracteristicas'>
                            <h3>CARACTERISTICAS</h3>
                            <div className='stats'>
                                <img alt="icon" src={sword} />
                                ATTACK: {myPokemon[0].attack}
                            </div>
                            <div className='stats'>
                                <img alt="icon" src={heart} />
                                VIDA: {myPokemon[0].hp}
                            </div>
                            <div className='stats'>
                                <img alt="icon" src={shield} />
                                DEFENSA: {myPokemon[0].defense}
                            </div>
                            <div className='stats'>
                                <img alt="icon" src={feather} />
                                VELOCIDAD: {myPokemon[0].speed}
                            </div>
                            <div className='stats'>
                                <img alt="icon" src={weight} />
                                PESO: {myPokemon[0].weight}
                            </div>
                            <div className='stats'>
                                <img alt="icon" src={height} />
                                ALTURA: {myPokemon[0].height}
                            </div>
                            <h3>TIPO:</h3>
                            {
                                myPokemon[0].types.map((type) => {
                                    return(
                                        <div key={type.name}>
                                        <img
                                            className='typeImg'
                                            alt='type'
                                            src={require(`./pokeIcons/${type.name}.png`).default}
                                        />
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div >
                            <Link to='/home' className='botonCreate'>HOME</Link>
                        </div>
                    </div> : <div><Loading /></div>
            }


        </div>
    )
}