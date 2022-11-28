import { Link } from 'react-router-dom'
import { FavoriteButton } from '../FavoriteButton'
import clsx from 'clsx'

const cardClassName = 'bg-white rounded-md border border-gray-300 px-6 h-16 flex items-center gap-2'

export const PokemonListCard = ({ name, isFavorite, toggleFavorite }: {
  name: string
  isFavorite: boolean
  toggleFavorite: (name: string) => void
}) => {
  return (
    <div className={clsx(cardClassName, 'hover:bg-gray-50')}>
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

export const PokemonListLoadingCard = () => {
  return (
    <div className={clsx(cardClassName, 'animate-pulse')}>
      <div className="w-32 h-6 bg-slate-200 rounded" />
    </div>
  )
}
