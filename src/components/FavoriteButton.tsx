import React from 'react'
import loveball from '../assets/loveball.png'

export const FavoriteButton = ({ name, isFavorite, toggleFavorite }: {
  name: string
  isFavorite: boolean
  toggleFavorite: (name: string) => void
}) => {
  return (
    <button type="button" onClick={() => toggleFavorite(name)} title="Toggle favorite">
      <img className={isFavorite ? undefined : 'grayscale'} src={loveball} alt="Toggle favorite icon" />
    </button>
  )
}
