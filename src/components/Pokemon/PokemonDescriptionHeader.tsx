import React, { PropsWithChildren } from 'react'

export default function PokemonDescriptionHeader ({ children }: PropsWithChildren) {
  return (
    <div className='px-4 sm:px-6 h-24 flex items-center'>{children}</div>
  )
}
