import { gql } from "apollo-server";

export default gql`
  type Gender {
    id: Int!
    name: String!
    pokemon_species_details: [PokemonSpeciesGender!]!
    required_for_evolution: [PokemonSpecies!]!
  }

  type PokemonSpeciesGender {
    rate: Int!
    pokemon_species: PokemonSpecies!
  }

  type Query {
    genderList(limit: Int!, offset: Int): PaginationListGender
    gender(id: Int!): Gender
  }

  type PaginationListGender{
    offset: Int
    limit: Int
    count: Int
    list: [Gender!]!
  }
`
