import JogoDaVelha from "../components/JogoDaVelha.tsx"
import {Link} from "react-router-dom"


export default function ComputerMode()  {
    return (
       <div>
            <JogoDaVelha value={"1"}/>
            <nav><Link to="/choose-game-mode"><button className="button__back">voltar</button></Link></nav>
       </div> 
    )
}