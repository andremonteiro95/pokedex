export default class LRUCache {
  private readonly cache = new Map()

  constructor (private readonly capacity: number) {}

  get<T = unknown> (key: string): T | undefined {
    if (!this.cache.has(key)) return

    const value = this.cache.get(key)

    // Set the key as the most recently used
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put<T = unknown> (key: string, value: T): void {
    this.cache.delete(key)

    if (this.cache.size === this.capacity) {
      // Get the first key of the Map using an iterator object
      this.cache.delete(this.cache.keys().next().value)
    }

    this.cache.set(key, value)
  }
}
