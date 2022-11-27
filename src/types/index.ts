export interface NamedAPIResource {
  name: string
  url: string
}

export interface NamedAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}

export interface PokemonAbility {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

export interface PokemonMove {
  move: NamedAPIResource
  // version_group_details
}

export interface PokemonSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface PokemonStat {
  stat: NamedAPIResource
  base_stat: number
  effort: number
}

export interface PokemonType {
  type: NamedAPIResource
  slot: number
}

export interface Pokemon {
  abilities: PokemonAbility[]
  base_experience: number
  // forms
  game_indices: VersionGameIndex[]
  height: number
  id: number
  // is_default
  location_area_encounters: string
  moves: PokemonMove[]
  name: string
  order: number
  // past_types
  // species
  sprites: PokemonSprites
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}

export interface VersionGameIndex {
  game_index: number
  version: NamedAPIResource
}
