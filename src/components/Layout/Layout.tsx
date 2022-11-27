import React, { PropsWithChildren } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

const NavbarLink = (props: LinkProps) => {
  return <NavLink {...props} className="text-white font-semibold" />
}

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-screen w-full bg-slate-100'>
      <div className='h-16 w-full bg-red-500 border-b-4 border-black'>
        <div className='container mx-auto h-full px-8 gap-8 flex items-center'>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/favorites">Favorites</NavbarLink>
        </div>
      </div>
      <div className='container mx-auto p-8'>
        {children}
      </div>
    </div>
  )
}
