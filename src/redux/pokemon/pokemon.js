import axios from 'axios'

// constants
const initialData = {
    data: []
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'

// reducers
const pokemonReducer = (state = initialData, action) => {
    switch(action.type){
        case GET_POKEMONS_SUCCESS:
            return {...state, data: action.payload}
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

// export
export default pokemonReducer