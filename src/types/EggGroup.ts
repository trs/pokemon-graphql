import { gql } from "apollo-server";

export default gql`
  type EggGroup {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }

type Query {
  eggGroupList(limit: Int!, offset: Int!): PaginationListEggGroup
  eggGroup(id: Int!): EggGroup
}

type PaginationListEggGroup{
    offset: Int
    limit: Int
    count: Int
  list: [EggGroup!]!
}
`
