import {Link} from "react-router-dom"

export default function ChooseGameMode() {
    return (
        <div>
            <nav>
                <Link to = "/computer-mode"><button><h2>Jogar contra o computador</h2></button></Link>
                <Link to = "/friend-mode"><button><h2>Jogar contra um amigo</h2></button></Link>
                <Link to="/"><button className="button__back">voltar</button></Link>
            </nav>
        </div>
    )
}