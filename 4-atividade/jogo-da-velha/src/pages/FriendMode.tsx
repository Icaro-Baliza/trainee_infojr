import JogoDaVelha from "../components/JogoDaVelha.tsx"
import {Link} from "react-router-dom"


export default function FriendMode() {
    return (
       <div>
            <JogoDaVelha value={"2"}/>
            <nav><Link to="/choose-game-mode"><button className="button__back">voltar</button></Link></nav>
       </div> 
    )
}