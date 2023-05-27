import {Outlet} from "react-router-dom";
import "./App.css"

function App() {

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      <div className="conteudo">
        <Outlet />
      </div>
      <footer>Desenvolvido por Ícaro Fernadnes</footer>
    </div>
  )
}

export default App
