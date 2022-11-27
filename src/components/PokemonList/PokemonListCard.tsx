import { Link } from 'react-router-dom'
import { pokemonIdToDexNumber } from '../../utils'
import { FavoriteButton } from '../FavoriteButton'

export const PokemonListCard = ({ id, name, isFavorite, toggleFavorite }: {
  id: number
  name: string
  isFavorite: boolean
  toggleFavorite: (id: number) => void
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-start gap-2">
      <Link to={`/pokemon/${id}`} className='flex-grow'>
        <p className='text-sm text-slate-600'>
          {pokemonIdToDexNumber(id)}
        </p>
        <p className="capitalize text-base text-slate-900 font-semibold">
          {name}
        </p>
      </Link>

      <FavoriteButton
        id={id}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}
