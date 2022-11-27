import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPokemon } from '../api/pokemon'
import { FavoriteButton } from '../components/FavoriteButton'
import PokemonDescriptionHeader from '../components/Pokemon/PokemonDescriptionHeader'
import { PokemonDescriptionDetails, PokemonDescriptionList, PokemonDescriptionListRow, PokemonDescriptionTerm } from '../components/Pokemon/PokemonDescriptionList'
import { PokemonTypeTag } from '../components/Pokemon/PokemonTypeTag'
import useFavoritesStore from '../stores/useFavoritesStore'
import { Pokemon } from '../types'
import { pokemonIdToDexNumber } from '../utils'

export const PokemonPage = () => {
  const { pokemonId } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<Pokemon>()

  const { favorites, toggleFavorite } = useFavoritesStore()

  useEffect(() => {
    if (!pokemonId) {
      navigate('/', { replace: true })
      return
    }

    setIsLoading(true)

    getPokemon(+pokemonId)
      .then((pokemon) => {
        setPokemon(pokemon)
        setIsLoading(false)
      })
      .catch(() => {})
  }, [pokemonId])

  if (!pokemon || isLoading) {
    return null
  }

  return (
    <div className='flex flex-col gap-4'>
      {/* TODO: i18n */}
      <Link to="/" className='text-sm text-slate-600'>&lt; Back to Pokemon list</Link>

      <div className='rounded-lg shadow bg-white'>
        <PokemonDescriptionHeader>
          {pokemon.sprites.front_default && (<div className='h-24 w-24'>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          </div>)}

          <div className='flex-grow'>
            <p className='text-gray-500 text-sm'>
              {pokemonIdToDexNumber(pokemon.id)}
            </p>
            <h1 className='capitalize text-3xl font-semibold'>{pokemon.name}</h1>
          </div>

          <FavoriteButton
            id={pokemon.id}
            isFavorite={!!favorites[pokemon.id]}
            toggleFavorite={(id) => { toggleFavorite(id, pokemon.name) }}
          />
        </PokemonDescriptionHeader>

        <PokemonDescriptionList>
          <PokemonDescriptionListRow>
            <PokemonDescriptionTerm>
              Types
            </PokemonDescriptionTerm>
            <PokemonDescriptionDetails>
              <div className='flex gap-2'>
                {pokemon.types.map(type => (<PokemonTypeTag key={type.slot} name={type.type.name} />))}
              </div>
            </PokemonDescriptionDetails>
          </PokemonDescriptionListRow>

          <PokemonDescriptionListRow>
            <PokemonDescriptionTerm>
              Height
            </PokemonDescriptionTerm>
            <PokemonDescriptionDetails>
              {pokemon.height / 10} m
            </PokemonDescriptionDetails>
          </PokemonDescriptionListRow>

          <PokemonDescriptionListRow>
            <PokemonDescriptionTerm>
              Weight
            </PokemonDescriptionTerm>
            <PokemonDescriptionDetails>
              {pokemon.weight / 10} kg
            </PokemonDescriptionDetails>
          </PokemonDescriptionListRow>
        </PokemonDescriptionList>
      </div>
    </div>
  )
}
