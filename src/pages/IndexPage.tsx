import { useEffect } from 'react'
import usePokemonListStore from '../stores/usePokemonListStore'
import useFavoritesStore from '../stores/useFavoritesStore'
import { PokemonList } from '../components/PokemonList/PokemonList'
import { PokemonListCard } from '../components/PokemonList/PokemonListCard'

function IndexPage () {
  const { list, loadPage } = usePokemonListStore((state) => ({
    list: state.results,
    loadPage: state.loadPage
  }))
  const { favorites, toggleFavorite } = useFavoritesStore()

  useEffect(() => {
    loadPage(1)
  }, [])

  return (
    <PokemonList>
      {list?.map(({ name }, index) => {
        const id = index + 1
        return (
          <PokemonListCard
            key={name}
            id={id}
            name={name}
            isFavorite={!!favorites[id]}
            toggleFavorite={(id) => { toggleFavorite(id, name) }}
          />
        )
      })}
    </PokemonList>
  )
}

export default IndexPage
