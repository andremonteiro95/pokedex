import { useEffect, useMemo } from 'react'
import usePokemonListStore from '../stores/usePokemonListStore'
import useFavoritesStore from '../stores/useFavoritesStore'
import { PokemonList } from '../components/PokemonList/PokemonList'
import { PokemonListCard, PokemonListLoadingCard } from '../components/PokemonList/PokemonListCard'
import { PaginationLinks } from '../components/Layout/PaginationLinks'
import { useSearchParams } from 'react-router-dom'

function IndexPage () {
  const { list, loadPage, isLoading, previous, next } = usePokemonListStore((state) => ({
    list: state.results,
    loadPage: state.loadPage,
    isLoading: state.isLoading,
    previous: state.previous,
    next: state.next
  }))
  const { favorites, toggleFavorite } = useFavoritesStore()

  const [searchParams, setSearchParams] = useSearchParams()

  const page = useMemo(
    () => +(searchParams.get('page') ?? 1),
    [searchParams]
  )

  useEffect(() => {
    if (page < 1) {
      setSearchParams({ page: '1' })
      return
    }
    loadPage(page)
  }, [page])

  return (
    <div className='flex flex-col gap-4'>
      <PokemonList>
        {isLoading && new Array(20).fill(undefined).map((_, index) => <PokemonListLoadingCard key={index} />)}
        {!isLoading && list?.map(({ name }) => (
          <PokemonListCard
            key={name}
            name={name}
            isFavorite={!!favorites.has(name)}
            toggleFavorite={(name) => { toggleFavorite(name) }}
          />
        ))}
      </PokemonList>

      <PaginationLinks currentPage={page} hasPreviousPage={!!previous} hasNextPage={!!next} />
    </div>
  )
}

export default IndexPage
