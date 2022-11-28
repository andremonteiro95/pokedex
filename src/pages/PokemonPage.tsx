import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getPokemon } from '../api/pokemon'
import { PokemonDescriptionHeader } from '../components/Pokemon/PokemonDescriptionHeader'
import { PokemonDescriptionDetails, PokemonDescriptionList, PokemonDescriptionListRow, PokemonDescriptionTerm } from '../components/Pokemon/PokemonDescriptionList'
import { PokemonTypeTag } from '../components/Pokemon/PokemonTypeTag'
import useFavoritesStore from '../stores/useFavoritesStore'
import { Pokemon } from '../types'

export const PokemonPage = () => {
  const { pokemonName } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<Pokemon>()

  const { favorites, toggleFavorite } = useFavoritesStore()

  useEffect(() => {
    if (!pokemonName) {
      navigate('/', { replace: true })
      return
    }

    setIsLoading(true)

    getPokemon(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon)
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(error?.message || 'An error has occurred while loading the details.')
      })
  }, [pokemonName])

  return (
    <div className='flex flex-col gap-4'>
      {/* TODO: i18n */}
      <Link to="/" className='text-sm text-slate-600'>&lt; Back to Pokemon list</Link>

      <div className='rounded-lg shadow bg-white'>
        <PokemonDescriptionHeader
          isLoading={isLoading}
          pokemon={pokemon}
          isFavorite={!!pokemon?.id && !!favorites.has(pokemon.name)}
          toggleFavorite={toggleFavorite}
        />

        {pokemon && (<PokemonDescriptionList>
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
        </PokemonDescriptionList>)}
      </div>
    </div>
  )
}
