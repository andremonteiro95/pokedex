import { useEffect } from 'react'
import usePokemonListStore from '../stores/pokemon-list'
import { PokemonList } from '../components/PokemonList/PokemonList'
import { PokemonListCard } from '../components/PokemonList/PokemonListCard'

function IndexPage () {
  const { list, loadPage } = usePokemonListStore((state) => ({
    list: state.results,
    loadPage: state.loadPage
  }))

  useEffect(() => {
    loadPage(1)
  }, [])

  return (
    <PokemonList>
      {list?.map(({ name }, index) => (<PokemonListCard key={name} id={index + 1} name={name} />))}
    </PokemonList>
  )
}

export default IndexPage
