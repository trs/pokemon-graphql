import { gql } from "apollo-server";

export default gql`
  type Pokedex {
    id: Int!
    name: String!
    is_main_series: Boolean!
    descriptions: [Description!]!
    names: [Name!]!
    pokemon_entries: [PokemonEntry!]!
    region: Region!
    version_groups: [VersionGroup!]!
  }

  type PokemonEntry {
    entry_number: Int!
    pokemon_species: PokemonSpecies!
  }

type Query {
  pokedexList(limit: Int!, offset: Int): PaginationListPokedex
  pokedex(id: Int!): Pokedex
}

type PaginationListPokedex{
    offset: Int
    limit: Int
    count: Int
  list: [Pokedex!]!
}
`;
