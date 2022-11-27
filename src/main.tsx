import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import './index.scss'
import IndexPage from './pages/IndexPage'
import { PokemonPage } from './pages/PokemonPage'

/** TODO: 404 page */
const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />
  },
  {
    path: '/pokemon/:pokemonId',
    element: <PokemonPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
