import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'

export const App = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}
