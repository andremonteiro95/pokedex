import LRUCache from './lru-cache'

const CACHE_CAPACITY = 10

const cache = new LRUCache(CACHE_CAPACITY)

export async function apiGet<T = unknown> (input: string | URL): Promise<T> {
  const key = input.toString()
  const response = cache.get(key) ?? await fetch(input)
  cache.put(key, response)

  return await response.json()
}
