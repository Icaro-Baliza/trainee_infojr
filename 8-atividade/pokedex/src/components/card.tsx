import Image from 'next/image'
import CSS from 'csstype'
import {useState} from 'react'
    import styles from '../styles/card.module.css'

interface Props {
    name: string;
    imageUrl: string;
    types: string[];
    isLogged: boolean;

}


function Card ({name, imageUrl, types, isLogged}: Props) {
    
    const [isFavorite, setIsFavorite] = useState(false)
    const [imageFavorite, setImageFavorite] = useState("/not-favorite.svg")


    function verifyColor(pokemonType: String) {
        switch (pokemonType) {
            case "grass":
                return("rgb(122, 199, 76")
            case "poison":
                return("rgb(163, 62, 161")
            case "fire":
                return("rgb(238, 129, 48")
            case "flying":
                return("rgb(169, 143, 243")
            case "water":
                return("rgb(99, 144, 240")
            case "bug":
                return("rgb(166, 185, 26")
            case "normal":
                return("rgb(168, 167, 122")
            case "electric":
                return("rgb(247, 208, 44")
            case "ground":
                return("rgb(226, 191, 101")
            case "fairy":
                return("rgb(214, 133, 173")
            case "fighting":
                return("rgb(194, 46, 40")
            case "psychic":
                return("rgb(249, 85, 135")
            case "rock":
                return("rgb(182, 161, 54")
            case "steel":
                return("rgb(183, 183, 206")
            case "ice":
                return("rgb(150, 217, 214")
            case "ghost":
                return("rgb(115, 87, 151")
            case "dragon":
                return("rgb(111, 53, 252")
            default:
                return("")
        }
    }

    const divStyle: CSS.Properties = {
        backgroundColor: verifyColor(types[0]).concat(", 0.1)"),
    };

    const p1Style: CSS.Properties = {
        backgroundColor: verifyColor(types[0]).concat(")")
    };

    const p2Style: CSS.Properties = {
        backgroundColor: verifyColor(types[1]).concat(")"),
    };

    function favorite() {
        if (isFavorite) {
            setIsFavorite(false)
            setImageFavorite("/not-favorite.svg")
        } else {
            setIsFavorite(true)
            setImageFavorite("/favorite.svg")
        }
    }

    return(
        <div className={styles.card} style={divStyle}>
            <div className={styles.card__informations}>
                <div className={styles.card__favorite}>
                    <h1 className={styles.pokemon__name}>{name}</h1>
                    {
                        isLogged ?  
                                <Image 
                                src={imageFavorite}
                                alt="Imagem de uma pokebola"
                                width={24}
                                height={24}   
                                onClick={() => favorite()}
                                /> :
                                <></>
                    }
                </div>
                <div className={styles.card__types}>
                    <p className={styles.pokemon__type} style={p1Style}>{types[0]}</p>  
                    <p className={styles.pokemon__type} style={p2Style}>{types[1]}</p>
                </div>
            </div>
            <Image 
            src={imageUrl}
            alt={"Imagem de um ".concat(name)}
            width={120}
            height={120}
            />
        </div>

    )
}

export default Card;