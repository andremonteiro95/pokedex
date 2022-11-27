import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPokemon } from '../api/pokemon'
import PokemonDescriptionHeader from '../components/Pokemon/PokemonDescriptionHeader'
import { PokemonDescriptionDetails, PokemonDescriptionList, PokemonDescriptionListRow, PokemonDescriptionTerm } from '../components/Pokemon/PokemonDescriptionList'
import { Pokemon } from '../types'
import { pokemonIdToDexNumber } from '../utils'

export const PokemonPage = () => {
  const { pokemonId } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<Pokemon>()

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
        </PokemonDescriptionHeader>

        <PokemonDescriptionList>
            <PokemonDescriptionListRow>
              <PokemonDescriptionTerm>
                Height
              </PokemonDescriptionTerm>
              <PokemonDescriptionDetails>
                {pokemon.height / 10}m
              </PokemonDescriptionDetails>
            </PokemonDescriptionListRow>

            <PokemonDescriptionListRow>
              <PokemonDescriptionTerm>
                Application for
              </PokemonDescriptionTerm>
              <PokemonDescriptionDetails>
                Backend Developer
              </PokemonDescriptionDetails>
            </PokemonDescriptionListRow>
        </PokemonDescriptionList>
      </div>
    </div>
  )
}
