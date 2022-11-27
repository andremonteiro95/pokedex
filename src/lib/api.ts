import LRUCache from './lru-cache'

const CACHE_CAPACITY = 10

const cache = new LRUCache(CACHE_CAPACITY)

export async function apiGet<T = unknown> (input: string | URL): Promise<T> {
  const key = input.toString()

  const cachedResponse = cache.get<T>(key)
  if (cachedResponse) {
    return cachedResponse
  }

  const response = await (await fetch(input)).json()
  cache.put(key, response)
  return response
}
