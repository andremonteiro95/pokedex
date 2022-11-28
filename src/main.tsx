import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { App } from './App'
import { FavoritesPage } from './pages/FavoritesPage'
import IndexPage from './pages/IndexPage'
import { PokemonPage } from './pages/PokemonPage'
import './index.scss'
import 'react-toastify/dist/ReactToastify.min.css'

/** TODO: 404 page */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <IndexPage />
      },
      {
        path: 'favorites',
        element: <FavoritesPage />
      },
      {
        path: 'pokemon/:pokemonName',
        element: <PokemonPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>
)
