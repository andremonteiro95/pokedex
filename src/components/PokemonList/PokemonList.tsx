import React, { PropsWithChildren } from 'react'

export const PokemonList = ({ children }: PropsWithChildren) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>{children}</div>
  )
}
