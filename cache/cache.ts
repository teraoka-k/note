export const cache = {}

export function cacheData(key: string, value: any) {
  cache[key] = value
}

export function getCache(key: string): any {
  return cache[key]
}
