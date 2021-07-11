import { gql } from "apollo-server";

export default gql`
  type PokemonSpecies {
    id: Int!
    name: String!
    order: Int!
    gender_rate: Int!
    capture_rate: Int!
    base_happiness: Int!
    is_baby: Boolean!
    is_legendary: Boolean!
    is_mythical: Boolean!
    hatch_counter: Int!
    has_gender_differences: Boolean!
    forms_switchable: Boolean!
    growth_rate: GrowthRate!
    pokedex_numbers: [PokemonSpeciesDexEntry!]!
    egg_groups: [EggGroup!]!
    color: PokemonColor!
    shape: PokemonShape!
    evolves_from_species: PokemonSpecies!
    evolution_chain: EvolutionChain!
    habitat: PokemonHabitat!
    generation: Generation!
    names: [Name!]!
    pal_park_encounters: [PalParkEncounterArea!]!
    flavor_text_entries: [FlavorText!]!
    form_descriptions: [Description!]!
    genera: [Genus!]!
    varieties: [PokemonSpeciesVariety!]!
  }

  type Genus {
    genus: String!
    language: Language!
  }

  type PokemonSpeciesDexEntry {
    entry_number: Int!
    pokedex: Pokedex!
  }

  type PalParkEncounterArea {
    base_score: Int!
    rate: Int!
    area: PalParkArea!
  }

  type PokemonSpeciesVariety {
    is_default: Boolean!
    pokemon: Pokemon!
  }

type Query {
  pokemonSpeciesList(limit: Int!, offset: Int): PaginationListPokemonSpecies
  pokemonSpecies(id: Int!): PokemonSpecies
}

type PaginationListPokemonSpecies{
    offset: Int
    limit: Int
    count: Int
  list: [PokemonSpecies!]!
}
`;
