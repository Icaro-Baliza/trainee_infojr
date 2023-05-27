import JogoDaVelha from "../components/JogoDaVelha.tsx"
import {Link} from "react-router-dom"


export default function ComputerMode()  {
    return (
       <div>
            <nav><Link to="/choose-game-mode"><button>back</button></Link></nav>
            <JogoDaVelha value={"1"}/>
       </div> 
    )
}