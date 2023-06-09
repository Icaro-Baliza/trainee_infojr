import React, { useEffect, useState } from "react";
import "./Calculadora.css"

export function Calculadora(){
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operador, setOperador] = useState();

    function inputNum(e){
       var entrada = e.target.value; 
       if(num===0){
        setNum(entrada);
       }else{
        setNum(num + entrada);
       }
    }
    function limpar(e){
        setNum(0);
    }
    function porcentagem(e){
        setNum(num/100)
    }
    function mudaSinal(e){
        setNum(num*(-1))
    }
    function mudaOperador(e){
        var operadorEntrada = e.target.value;
        setOperador(operadorEntrada);
        setOldNum(num);
        setNum(0);
    }
    function calcula(){
        if(operador == "/"){
            setNum(parseFloat(oldnum)/ parseFloat(num));
        }
        if(operador == "*"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }
        if(operador == "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }
        if(operador == "+"){
            setNum(parseFloat(oldnum) + parseFloat(num))            
        }
    }

    return(
        <div className="container">
            <div className="wrapper">
                <img className="imagem" src = "public\imagem.png"/>
                <h1 className="visor">{num}</h1>

                <button className="funcoes" onClick={limpar}>AC</button>
                <button className="funcoes" onClick={mudaSinal}>+/-</button>
                <button className="funcoes" onClick={porcentagem}>%</button>
                <button className="operadores" onClick={mudaOperador} value={"/"}>/</button>
                <button className="numeros" onClick={inputNum} value={7}>7</button>
                <button className="numeros" onClick={inputNum} value={8}>8</button>
                <button className="numeros" onClick={inputNum} value={9}>9</button>
                <button className="operadores"  onClick={mudaOperador} value={"*"}>X</button>
                <button className="numeros" onClick={inputNum} value={4}>4</button>
                <button className="numeros" onClick={inputNum} value={5}>5</button>
                <button className="numeros" onClick={inputNum} value={6}>6</button>
                <button className="operadores" onClick={mudaOperador} value={"-"}>-</button>
                <button className="numeros" onClick={inputNum} value={1}>1</button>
                <button className="numeros" onClick={inputNum} value={2}>2</button>
                <button className="numeros" onClick={inputNum} value={3}>3</button>
                <button className="operadores"  onClick={mudaOperador} value={"+"}>+</button>
                <button className="numeros" onClick={inputNum} value={0}>0</button>
                <button className="numeros" onClick={inputNum} value={"."}>,</button>
                <button className="operadores" onClick={calcula}>=</button>
            
            </div>
        </div>
    )
}