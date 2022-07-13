const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: []
}

function rootReducer (state = initialState, action){
switch (action.type){
    case 'GET_POKEMONS' :
        return {
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload
        }
     case 'GET_NAME_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }

    case 'GET_TYPES' : 
            return{
                ...state,
                types: action.payload
            }

    case 'FILTER_BY_TYPE' : 
    const allPokemons = state.allPokemons
    const typeFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types.map(e => e.name)[0] === action.payload)
        return {
            ...state,
            pokemons: typeFiltered 
         }
    
    case 'FILTER_CREATED' :
        const allPokemons2 = state.allPokemons
        const createdFilter = action.payload === 'created' ? allPokemons2.filter(e => e.createdInDb) : allPokemons2.filter(e => !e.createdInDb)
        return{
            ...state,
            pokemons: action.payload === 'all' ? state.allPokemons : createdFilter
        }
    case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' ?
            state.pokemons.sort(function (a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            state.pokemons.sort(function (a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                allPokemons: sortedArr
            }
        case 'ORDER_BY_ATTACK':
            console.log(action.payload)
                let sortedAttack = action.payload === 'weak' ?
                state.pokemons.sort(function (a, b) {
                    if(a.attack > b.attack) {
                        return 1;
                    }
                    if(b.attack > a.attack) {
                        return -1;
                    }
                    return 0;
                }) : 
                state.pokemons.sort(function (a, b) {
                    if(a.attack > b.attack) {
                        return -1;
                    }
                    if(b.attack > a.attack) {
                        return 1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    allPokemons:sortedAttack
                }
        case 'POST_POKEMON':
                return {
                    ...state
                }
        case 'GET_DETAILS':
            return{
                ...state,
                detail: action.payload
            }
            case 'REMOVE_DETAIL':
                return {
                  ...state,
                  detail: null
                }
       
        default: return state;
    
}
    
}


export default rootReducer;