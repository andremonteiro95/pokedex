import { Link } from 'react-router-dom'
import { FavoriteButton } from '../FavoriteButton'

export const PokemonListCard = ({ name, isFavorite, toggleFavorite }: {
  name: string
  isFavorite: boolean
  toggleFavorite: (name: string) => void
}) => {
  return (
    <div className="bg-white rounded-md border border-gray-300 p-6 flex items-start gap-2 hover:bg-gray-50">
      <Link to={`/pokemon/${name}`} className="flex-grow capitalize text-base text-slate-900 font-semibold">
        {name}
      </Link>

      <FavoriteButton
        name={name}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}
