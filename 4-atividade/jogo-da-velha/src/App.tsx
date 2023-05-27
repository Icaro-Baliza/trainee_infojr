import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <h1>Jogo da Velha</h1>
      <Outlet />
      <footer>Desenvolvido por Ícaro Fernandes</footer>
    </>
  )
}

export default App
