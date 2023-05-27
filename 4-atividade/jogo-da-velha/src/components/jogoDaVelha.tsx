import { useState } from "react";
import "./jogoDaVelha.css";
import Quadrant from "./Quadrant";

interface JogoDaVelhaProps{
    value: string;
    
}

const JogoDaVelha: React.FC<JogoDaVelhaProps> = (props) =>{
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState<string>("X");
    const [rounds, setRounds] = useState<number>(0);
    const [mode, setMode] = useState<string>(props.value);
    const [over, setOver] = useState<boolean>(false);
    const [winsPlayerOne, setWinsPlayerOne] = useState<number>(0);
    const [winsPlayerTwo, setWinsPlayerTwo] = useState<number>(0);
    const [out, setOut] = useState<string>("Vez do jogador X, ou selecione qual jogador irá começar");


    function playerStarts(player: string){
        if (rounds !== 0){
            setOut("Partida em andamento");
        }
        else{
            setTurn(player);
            setOut("Vez do jogador " + player);
            if (mode === "1" && player === "O"){
                setTurn("X");
                const a = Array.from(squares);
                const l = computerPlay(a);
                setSquares(l);
                setRounds(rounds + 1);
                setOut("Sua vez");
            }
        }
    }

    function playInQuadrant(index: number){
        if (over) {
            return;
        }
        const a = Array.from(squares);
        if (a[index] !== null){
            return;
        }
        a[index] = turn;
        if (winCondition(a)){
            setSquares(a);
            checkWinner();
            return;
        }
        if (mode === "1"){
            const l = computerPlay(a);
            setSquares(l);
            setRounds(rounds + 2);
            if(winCondition(l)){
                setWinsPlayerTwo(winsPlayerTwo + 1);
                setOut("O é o vencedor");
                setOver(true);
                return;
            }
            setTurn("X");
            setOut("Sua vez");
            if (rounds === 8){
                setOut("Empate");
                setOver(true);

            }
            return;
        }
        const t = turn === "X" ? "O" : "X";
        setTurn(t);
        setSquares(a);
        setRounds(rounds + 1);
        setOut("Vez do jogador " + t);
        if (rounds === 8){
            setOut("Empate");
            setOver(true);
        }
        return;
    }

    function computerPlay(squares: any[]) {
        const a = squares;
        const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        while (lista.length>0){
            const num = Math.floor(Math.random()*lista.length);
            if (a[lista[num]] !== null){
                lista.splice(num, 1);
            }
            else {
                a[lista[num]]="O";
                return a;
            }
        }
        return a;

    }

    function winCondition(squares: any[]) {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < win.length; i++){
            const [x, y, z] = win[i];
            if (squares[x] === squares[y] && squares[y] === squares[z] && squares[z] !== null){
                return true;
            }
        }
        return false;
    }

    function checkWinner() {
        if (turn == "X"){
            setWinsPlayerOne(winsPlayerOne + 1);
            setOut("X é o vencedor");
            setOver(true);
        }
        else {
            setWinsPlayerTwo(winsPlayerTwo + 1);
            setOut("O é o vencedor");
            setOver(true);
        }
    }

    function nextGame(){
        setSquares(Array(9).fill(null));
        setTurn("X");
        setRounds(0);
        setOver(false);
        setOut("Vez do jogador X, ou selecione qual jogador irá começar");
    }

    function restart() {
        setSquares(Array(9).fill(null));
        setTurn("X");
        setRounds(0);
        setOver(false);
        setWinsPlayerOne(0);
        setWinsPlayerTwo(0);
        setOut("Vez do jogador X, ou selecione qual jogador irá começar");
    }



    return (
        <div className="display">
            <div className="top">
                <h2 className="top__title">{out}</h2>
                <div className="top__buttons">
                    <button className="X" onClick={() => playerStarts("X")}>X</button>
                    <button className="O" onClick={() => playerStarts("O")}>O</button>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom__buttons">
                    <button className="buttons__restart" onClick={() => restart()}>Reiniciar</button>
                    <button className="buttons__restart" onClick={() => nextGame()}>Jogar de novo</button>
                </div>
                <div className="grid">
                    <div className="line">
                        <Quadrant onClick={() => playInQuadrant(0)} value={squares[0]}/>
                        <Quadrant onClick={() => playInQuadrant(1)} value={squares[1]}/>
                        <Quadrant onClick={() => playInQuadrant(2)} value={squares[2]}/>
                    </div>
                    <div className="line">
                        <Quadrant onClick={() => playInQuadrant(3)} value={squares[3]}/>
                        <Quadrant onClick={() => playInQuadrant(4)} value={squares[4]}/>
                        <Quadrant onClick={() => playInQuadrant(5)} value={squares[5]}/>
                    </div>
                    <div className="line">
                        <Quadrant onClick={() => playInQuadrant(6)} value={squares[6]}/>
                        <Quadrant onClick={() => playInQuadrant(7)} value={squares[7]}/>
                        <Quadrant onClick={() => playInQuadrant(8)} value={squares[8]}/>
                    </div>
                </div>
                <div className="placar">
                    <div className="jogador1">X - {winsPlayerOne}</div>
                    <div className="jogador2">O - {winsPlayerTwo}</div>
                </div>
            </div>
        </div>
    )
}

export default JogoDaVelha;