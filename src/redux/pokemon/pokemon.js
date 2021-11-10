import axios from 'axios'

// constants
const initialData = {
    data: [],
    offset: 0
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const GET_NEXT_POKEMONS_SUCCESS = 'GET_NEXT_POKEMONS_SUCCESS'
const PAGINATION_SIZE = 20

// reducers
const pokemonReducer = (state = initialData, action) => {
    switch(action.type){
        case GET_POKEMONS_SUCCESS:
            return {...state, data: action.payload}
        case GET_NEXT_POKEMONS_SUCCESS:
            return {...state, data: action.payload.data, offset: action.payload.offset}
        default:
            return state
    }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: response.data.results
        })
    } catch(error){
        console.log(error)
    }
}

export const getNextPokemonsAction = () => async (dispatch, getState) => {
    try{
        let next = getState().pokemons.offset + PAGINATION_SIZE
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=' + PAGINATION_SIZE + '&offset=' + next)
        dispatch({
            type: GET_NEXT_POKEMONS_SUCCESS,
            payload: {
                data: response.data.results,
                offset: next
            }
        })
    } catch(error){
        console.log(error)
    }
}

// export
export default pokemonReducer
