export function pokemonIdToDexNumber (id: number) {
  return '#' + id.toString().padStart(3, '0')
}
