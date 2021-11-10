import React, {Fragment} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {getPokemonsAction, getNextPokemonsAction} from '../../redux/pokemon/pokemon'

const Pokemons = () => {
    const dispatch = useDispatch()

    const pokemons = useSelector(store => store.pokemons.data)
    
    let pokemonsList = pokemons.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <Fragment>
            <h1>Lista de pokemons</h1>
            <button onClick={() => dispatch(getPokemonsAction())} >Get pokemons</button>
            <button onClick={() => dispatch(getNextPokemonsAction())}>Next Pokemons</button>
            <hr />
            <ol>
                {pokemonsList}
            </ol>
        </Fragment>
    )
}

export default Pokemons
