import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-screen w-full bg-slate-100'>
      <div className='h-16 w-full bg-red-500 border-b-4 border-black'>
        <div className='container mx-auto'>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <div className='container mx-auto p-8'>
        {children}
      </div>
    </div>
  )
}
