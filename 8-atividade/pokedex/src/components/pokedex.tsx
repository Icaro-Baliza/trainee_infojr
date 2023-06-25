import React,{ useState, useEffect } from 'react';
import Card from './card'
import styles from '../styles/pokedex.module.css'


type Pokemon = {
    id: number,
    name: string,
    image: string,
    types: string[],

}

interface PokedexProps {
    listaPokemons: Array<Pokemon>
}


const Pokedex = ({listaPokemons}: PokedexProps) => {
    return (
        <div className={styles.container}>
            <h1>Pokédex</h1>
            <section className={styles.lista__pokemons}>
                {
                    listaPokemons.map((pokemon) => (
                        <div key={pokemon.id}>
                            <Card name={pokemon.name} imageUrl={pokemon.image} types={pokemon.types} isLogged={false} />
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Pokedex;