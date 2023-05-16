import './App.css'
import './calculadora.css'

function App() {
  return (
    <div className="App">
      <div className="line">
        <button className="erase">C</button>
        <button className="operation">( )</button>
        <button className="operation">%</button>
        <button className="operation">÷</button>
      </div>
      <div className="line">
        <button className="numbers">7</button>
        <button className="numbers">8</button>
        <button className="numbers">9</button>
        <button className="operation">x</button>
      </div>
      <div className="line">
        <button className="numbers">4</button>
        <button className="numbers">5</button>
        <button className="numbers">6</button>
        <button className="operation">-</button>
      </div>
      <div className="line">
        <button className="numbers">1</button>
        <button className="numbers">2</button>
        <button className="numbers">3</button>
        <button className="operation">+</button>
      </div>
            <div className="line">
        <button>+/-</button>
        <button className="numbers">0</button>
        <button>,</button>
        <button className="equals">=</button>
      </div>
      
    </div>
  )
}

export default App
