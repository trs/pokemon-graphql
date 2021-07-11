import { gql } from "apollo-server";

export default gql`
  type PokemonColor {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }

type Query {
  pokemonColorList(limit: Int!, offset: Int!): PaginationListPokemonColor
  pokemonColor(id: Int!): PokemonColor
}

type PaginationListPokemonColor{
    offset: Int
    limit: Int
    count: Int
  list: [PokemonColor!]!
}
`;
