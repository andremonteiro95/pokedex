import create from 'zustand'
import { listPokemon } from '../api/pokemon'
import { NamedAPIResourceList } from '../types'

interface PokemonListState extends Partial<NamedAPIResourceList> {
  isLoading: boolean
  loadPage: (pageNumber: number) => Promise<void>
}

const usePokemonListStore = create<PokemonListState>((set) => ({
  isLoading: false,
  loadPage: async (page: number) => {
    if (page == null || page < 1) {
      throw new Error('Page should be a positive number')
    }
    set({ isLoading: true })
    set({
      ...await listPokemon({ page }),
      isLoading: false
    })
  }
}))

export default usePokemonListStore
