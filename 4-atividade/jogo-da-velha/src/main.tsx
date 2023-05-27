import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.tsx'
import ChooseGameMode from './pages/ChooseGameMode.tsx'
import FriendMode from './pages/FriendMode.tsx'
import ComputerMode from './pages/ComputerMode.tsx'

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
        path:"friend-mode",
        element: <FriendMode />
      },
      {
        path:"computer-mode",
        element: <ComputerMode />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
