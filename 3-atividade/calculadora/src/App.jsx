import Calculator from './components/Calculator.jsx'
import './App.css'


function App() {
  return (
    <div className='App'>
      <h1 className='titulo'>Calculadora</h1>
      <h2 className='titulo2'>Obs: 12 símbolos no máximo</h2>
      <Calculator />
    </div>
  )
}

export default App