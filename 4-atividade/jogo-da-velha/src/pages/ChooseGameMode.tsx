import {Link} from "react-router-dom"

export default function ChooseGameMode() {
    return (
        <div>
            <nav>
                <Link to = "/computer-mode"><button>Jogar contra o computador</button></Link>
                <Link to = "/friend-mode"><button>Jogar contra um amigo</button></Link>
            </nav>
        </div>
    )
}