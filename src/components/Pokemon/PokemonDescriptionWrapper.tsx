import React, { PropsWithChildren } from 'react'

export default function PokemonDescriptionWrapper ({ children }: PropsWithChildren) {
  return (
    <div className='rounded-lg shadow bg-white'>{children}</div>
  )
}
