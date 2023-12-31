import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Pokedex from '@/components/pokedex'

export default function Home() {

  type Pokemon = {
    id: number,
    name: string,
    image: string,
    types: string[],
}

const listaPokemons: Array<Pokemon> = [
  {
  id: 1,
  name: "Bulbasaur",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  types: ["grass", "poison"]
  },
  {
  id: 2,
  name: "Ivysaur",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  types: ["grass", "poison"]
  },
  {
  id: 3,
  name: "Venusaur",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  types: ["grass", "poison"]
  },
  {
  id: 4,
  name: "Charmander",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  types: ["fire"]
  },
  {
  id: 5,
  name: "Charmeleon",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  types: ["fire"]
  },
  {
  id: 6,
  name: "Charizard",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  types: ["fire", "flying"]
  },
  {
  id: 7,
  name: "Squirtle",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  types: ["water"]
  },
  {
  id: 8,
  name: "Wartortle",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  types: ["water"]
  },

]

  return (
    <div className={styles.app}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Image 
            src="/pokebola.svg"
            alt="Imagem de uma pokebola"
            width={36}
            height={36}
          />
        </header>
        <main>
          <Pokedex listaPokemons={listaPokemons}/>
        </main>
      <footer>
          <p>Com 💛 Info Jr UFBA 2022</p>
      </footer>
    </div>
  )
}
