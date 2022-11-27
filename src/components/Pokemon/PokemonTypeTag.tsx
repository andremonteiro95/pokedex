import React from 'react'

const TYPE_NAME_TO_BACKGROUND_COLOR = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  shadow: '#68A090',
  unknown: '#68A090'
}

export const PokemonTypeTag = ({ name }: { name: string }) => {
  return (
    <div
      className='py-1 px-2 rounded text-white capitalize'
      style={{
        backgroundColor: TYPE_NAME_TO_BACKGROUND_COLOR[name as keyof typeof TYPE_NAME_TO_BACKGROUND_COLOR]
      }}
    >
      {name}
    </div>
  )
}
