import {Link} from "react-router-dom";


export default function Home() {
    return (
        <Link to = "/choose-game-mode">
            <button><h2>Jogar</h2></button>
        </Link>
    )
}