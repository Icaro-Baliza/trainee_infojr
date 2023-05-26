import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.tsx'
import Game from './pages/Game.tsx'
import ChooseGameMode from './pages/ChooseGameMode.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"choose-game-mode",
        element: <ChooseGameMode />
      },
      {
        path:"game",
        element: <Game />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
