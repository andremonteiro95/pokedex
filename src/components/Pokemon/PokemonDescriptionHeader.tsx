import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Pokemon } from '../../types'
import { pokemonIdToDexNumber } from '../../utils'
import { FavoriteButton, FavoriteButtonProps } from '../FavoriteButton'

export const PokemonDescriptionHeader = ({ pokemon, isLoading, isFavorite, toggleFavorite }: PropsWithChildren<{
  pokemon?: Pokemon
  isLoading: boolean
} & Omit<FavoriteButtonProps, 'name'>>) => {
  return (
    <div className={clsx('px-4 sm:px-6 h-24 flex items-center', { 'animate-pulse': isLoading })}>
      {isLoading && <div className="rounded-full bg-slate-200 h-12 w-12 mx-6" />}
      {!isLoading && pokemon?.sprites.front_default && (<div className='h-24 w-24'>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      </div>)}

      <div className='flex-grow flex flex-col gap-2'>
        {
          !isLoading && pokemon
            ? (<p className='text-gray-500 text-sm'>
                {pokemonIdToDexNumber(pokemon.id)}
              </p>)
            : <div className='rounded-full bg-slate-200 h-4 w-12' />
        }
        {
          !isLoading && pokemon
            ? <h1 className='capitalize text-3xl font-semibold'>{pokemon.name}</h1>
            : <div className='rounded-full bg-slate-200 h-8 w-32' />
        }
      </div>

      {!isLoading && pokemon && <FavoriteButton name={pokemon?.name} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />}
    </div>
  )
}
