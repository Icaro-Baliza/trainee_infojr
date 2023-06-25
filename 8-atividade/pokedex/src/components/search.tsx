import Image from "next/image"

function Search () {

    function searchPokemon() {
        
    }

    <>
        <form>
            <input type="text" placeholder="Pesquisar pokémon"/>
            <Image src="" alt="Imagem de lupa" width={32} height={32} onClick={() => searchPokemon()}/>
        </form>
    </>
}