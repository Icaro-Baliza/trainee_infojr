import JogoDaVelha from "../components/JogoDaVelha.tsx"
import {Link} from "react-router-dom"


export default function FriendMode() {
    return (
       <div>
        <nav><Link to="/choose-game-mode"><button>back</button></Link></nav>
            <JogoDaVelha value={"2"}/>
       </div> 
    )
}