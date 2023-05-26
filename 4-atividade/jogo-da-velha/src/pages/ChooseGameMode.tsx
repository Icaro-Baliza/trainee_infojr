import {Link} from "react-router-dom"

export default function ChooseGameMode() {
    return (
        <div>
            <nav>
                <Link to = "/game"><button>vs. computer</button></Link>
                <Link to = "/game"><button>vs. friend</button></Link>
            </nav>
        </div>
    )
}