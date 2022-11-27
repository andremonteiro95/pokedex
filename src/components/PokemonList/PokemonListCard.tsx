import { Link } from 'react-router-dom'
import { pokemonIdToDexNumber } from '../../utils'

export const PokemonListCard = ({ id, name }: { id: number, name: string }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="bg-white rounded-lg shadow p-6">
        <p className='text-sm text-slate-600'>
          {pokemonIdToDexNumber(id)}
        </p>
        <p className="capitalize text-base text-slate-900 font-semibold">
          {name}
        </p>
      </div>
    </Link>
  )
}
