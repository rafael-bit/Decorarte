import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/App.css'
import Header from './Components/Header/index.jsx'
import Footer from './Components/Footer/index.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Carrinho from '../src/Pages/Carrinho'
import Conta from '../src/Pages/Conta'
import Favoritos from '../src/Pages/Favoritos'
import Home from '../src/Pages/Home'
import Promocao from '../src/Pages/Promocao'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/promocao",
    element: <Promocao/>
  },

  {
    path: "/favoritos",
    element: <Favoritos/>
  },

  {
    path: "/carrinho",
    element: <Carrinho/>
  },

  {
    path: "/conta",
    element: <Conta/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>,
)
