import { apiGet } from '../lib/api'
import { NamedAPIResourceList, Pokemon } from '../types'

// TODO: Use env variables for base URL
const BASE_URL = 'https://pokeapi.co/api/v2/'
const PAGE_LIMIT = 20

export async function listPokemon ({ page, limit = PAGE_LIMIT }: {
  page: number
  limit?: number
}) {
  const url = new URL('pokemon', BASE_URL)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('offset', (limit * (page - 1)).toString())
  return await apiGet<NamedAPIResourceList>(url)
}

export async function getPokemon (name: string) {
  const url = new URL(`pokemon/${name}`, BASE_URL)
  return await apiGet<Pokemon>(url)
}
