import React from 'react'
import loveball from '../assets/loveball.png'

export const FavoriteButton = ({ id, isFavorite, toggleFavorite }: {
  id: number
  isFavorite: boolean
  toggleFavorite: (id: number) => void
}) => {
  return (
    <button type="button" onClick={() => toggleFavorite(id)} title="Toggle favorite">
      <img className={isFavorite ? undefined : 'grayscale'} src={loveball} alt="Toggle favorite icon" />
    </button>
  )
}
