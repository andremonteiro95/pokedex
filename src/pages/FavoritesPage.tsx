import React from 'react'
import { PokemonList } from '../components/PokemonList/PokemonList'
import { PokemonListCard } from '../components/PokemonList/PokemonListCard'
import useFavoritesStore from '../stores/useFavoritesStore'

export const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavoritesStore()

  // TODO: Empty list info

  return (
    <PokemonList>
      {Array.from(favorites).map((name) => (
        <PokemonListCard
          key={name}
          name={name}
          toggleFavorite={(name) => { toggleFavorite(name) }}
          isFavorite
        />
      ))}
    </PokemonList>
  )
}
