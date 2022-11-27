import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface FavoritesState {
  favorites: Set<string>
  toggleFavorite: (name: string) => void
}

const useFavoritesStore = create(
  subscribeWithSelector<FavoritesState>((set, get) => ({
    favorites: new Set(),

    toggleFavorite: (name: string) => {
      if (get().favorites.has(name)) {
        set((state) => {
          const newSet = new Set(state.favorites)
          newSet.delete(name)
          return { favorites: newSet }
        })
        return
      }

      set((state) => {
        const newSet = new Set(state.favorites)
        newSet.add(name)
        return { favorites: newSet }
      })
    }
  }))
)

export default useFavoritesStore
