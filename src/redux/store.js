import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokemonReducer from './pokemon/pokemon'

const rootReducer = combineReducers({
    pokemons: pokemonReducer
})

// const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const generateStore = () => {
    // const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
    return store
}

export default generateStore
