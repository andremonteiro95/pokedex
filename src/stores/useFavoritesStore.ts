import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface FavoritesState {
  favorites: Record<number, string>
  toggleFavorite: (id: number, name: string) => void
}

const useFavoritesStore = create(immer<FavoritesState>((set, get) => ({
  favorites: {},

  toggleFavorite: (id: number, name: string) => {
    if (get().favorites[id]) {
      set((state) => {
        delete state.favorites[id]
        return state
      })
      return
    }

    set((state) => {
      state.favorites[id] = name
      return state
    })
  }
})))

export default useFavoritesStore
