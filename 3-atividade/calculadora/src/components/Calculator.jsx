import './calculator.css'
import { useState } from 'react'

export default function Calculator() {
  /*Saida do display*/
  const [valueScreen, setValueScreen]   = useState("");

  /*Guarda o primeiro numero digitado*/
  const [number, setNumber]             = useState(0);

  /*Guarda os números digitados, também é utilizado para as operaões como o segundo número*/
  const [acumulator, setAcumulator]     = useState(0);

  /*Determina a operação a ser feita*/
  const [operation, setOperation]       = useState("");

  /*Variavel booleano para verificar se um símbolo de operação foi inserido*/
  const [verification, setVerification] = useState(false);

  /*Variavel booleano para verificar se parenteses de abertura já foi inserido*/
  const [parentheses, setParentheses]   =useState(false);

  /*Insere número ou ponto*/
  function ClickNumber(input) {
    var dig = input.target.value;
    
    if (valueScreen.length>=12) {
      alert("Numero de digitos maximo alcançado");
    }
    else {
      if (valueScreen === 0){
        setValueScreen(dig);
      }
      else{
        setValueScreen(valueScreen + dig);
      } 
      if (acumulator === 0) {
        setAcumulator(dig);
      }
      else { 
        setAcumulator(acumulator + dig);
      }
    }
  }

  /*Reseta a calculadora*/
  function Clear(){
    setValueScreen("");
    setNumber(0);
    setAcumulator(0);
    setOperation();
    setVerification(false);
    setParentheses(false);
  }

  /*Determina a operação*/ 
  function ClickSymbol(input){
    var symbol = input.target.value
    if (valueScreen.length>=12) {
      alert("Numero de digitos maximo alcançado");
    }
    else{
      /*Caso o úsuario tente digitar sintaxe errada*/
      if (valueScreen === "" | (verification)){
        alert("Formato utilizado invalido");
      }

      else{
        setValueScreen(valueScreen + symbol);
        setNumber(acumulator);
        setAcumulator(0);
        setOperation(symbol);
        setVerification(true);
      }
    }
  }

  /*Função para inserir valores negativos*/
  function Signal() {
    if (acumulator === 0){
      setValueScreen(valueScreen + "(-" );
      setAcumulator("-");
      setParentheses(true);
    }
    else{
      alert("Sinal antes do número");
    }
  }

  /*Função para inserir parenteses de fecho ou abertura*/
  function Parentheses() {
    if (!acumulator===0){
      alert("Sinal antes do número");
    }
    else {
      if (parentheses) {
        setValueScreen(valueScreen + ")");
        setParentheses(false);
      }
      else {
        setValueScreen(valueScreen + "(");
        setParentheses(true);
      }
    }
  }

  /*Função que calcula e exibe o resultado na tela*/
  function Result() {
    var result = 0;
     
    if (operation === "%") {
      result = parseFloat(number)/100;
      /*Com estas atribuições é possível utilizar o resultado para outros cálculos*/
      setValueScreen(result);
      setAcumulator(result);
      setVerification(false);
    }
    /*Verifica qual operação sera feita*/
    else if (verification) {
      if (operation === "+") {
        result = parseFloat(number) + parseFloat(acumulator);    
      }

      else if (operation === "-") {
        result = parseFloat(number) - parseFloat(acumulator);
      }

      else if (operation === "x") {
        result = parseFloat(number) * parseFloat(acumulator);
      }
      else if (operation === "÷") {
        result = parseFloat(number) / parseFloat(acumulator);
      }

      /*Retorna até 11 casas para nao bugar o display*/
      if ((result + "").length>=12) {
        setValueScreen(result.toPrecision(11));
        setAcumulator(result.toPrecision(11));
        setVerification(false);
      }
      else{
      /*Com estas atribuições é possível utilizar o resultado para outros cálculos*/
      setValueScreen(result);
      setAcumulator(result);
      setVerification(false);
      }
    }
    /*Não aceita "=" sem ter digitado dois número*/
    else {
      alert("Formato utilizado invalido"); 
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <h1 className="result">{valueScreen}</h1>
      </div>
      <div className="line">
        <button className="erase" onClick={Clear}>C</button>
        <button className="operation" onClick={Parentheses}>( )</button>
        <button className="operation" onClick={ClickSymbol} value="%">%</button>
        <button className="operation" onClick={ClickSymbol} value="÷">÷</button>
      </div>
      <div className="line">
        <button className="numbers" onClick={ClickNumber} value={"7"}>7</button>
        <button className="numbers" onClick={ClickNumber} value={"8"}>8</button>
        <button className="numbers" onClick={ClickNumber} value={"9"}>9</button>
        <button className="operation" onClick={ClickSymbol} value="x">x</button>
      </div>
      <div className="line">
        <button className="numbers" onClick={ClickNumber} value={"4"}>4</button>
        <button className="numbers" onClick={ClickNumber} value={"5"}>5</button>
        <button className="numbers" onClick={ClickNumber} value={"6"}>6</button>
        <button className="operation" onClick={ClickSymbol} value={"-"}>-</button>
      </div>
      <div className="line">
        <button className="numbers" onClick={ClickNumber} value={"1"}>1</button>
        <button className="numbers" onClick={ClickNumber} value={"2"}>2</button>
        <button className="numbers" onClick={ClickNumber} value={"3"}>3</button>
        <button className="operation" onClick={ClickSymbol} value="+">+</button>
      </div>
      <div className="line">
        <button onClick={Signal}>+/-</button>
        <button className="numbers" onClick={ClickNumber} value={"0"}>0</button>
        <button className="numbers" onClick={ClickNumber} value={"."}>.</button>
        <button className="equals" onClick={Result}>=</button>
      </div>
    </div>
  )
}