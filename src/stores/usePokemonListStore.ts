import create from 'zustand'
import { listPokemon } from '../api/pokemon'
import { NamedAPIResourceList } from '../types'

interface PokemonListState extends Partial<NamedAPIResourceList> {
  loadPage: (pageNumber: number) => void
}

const usePokemonListStore = create<PokemonListState>((set) => ({
  loadPage: async (page: number) => {
    if (page == null || page < 1) {
      throw new Error('Page should be a positive number')
    }

    set(await listPokemon({ page }))
  }
}))

export default usePokemonListStore
