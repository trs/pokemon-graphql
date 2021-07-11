import { gql } from "apollo-server";

export default gql`
  type PokemonHabitat {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }

type Query {
  pokemonHabitatList(limit: Int!, offset: Int): PaginationListPokemonHabitat
  pokemonHabitat(id: Int!): PokemonHabitat
}

type PaginationListPokemonHabitat{
    offset: Int
    limit: Int
    count: Int
  list: [PokemonHabitat!]!
}
`;
