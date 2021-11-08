import React from 'react'
import Pokemons from './components/pokemon/pokemons'

import {Provider} from 'react-redux'

import generateStore from './redux/store'

const App = () => {
    
    const store = generateStore()

    return (
        <Provider store={store}>
            <Pokemons />
        </Provider>
    )
}

export default App
