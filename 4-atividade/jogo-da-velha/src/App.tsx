import { Routes, Route } from "react-router-dom"
import ChooseGameMode  from "./pages/ChooseGameMode"
import Game from "./pages/Game"



function App() {

  return (
    <>
      <h1>Jogo da Velha</h1>
      <Routes>
        <Route path = "/ChooseGameMode" element={<ChooseGameMode />}/>
        <Route path = "/Game" element={<Game />}/>
      </Routes>
    </>
  )
}

export default App
