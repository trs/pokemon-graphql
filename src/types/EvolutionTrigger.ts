import { gql } from "apollo-server";

export default gql`
  type EvolutionTrigger {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }

  type Query {
    evolutionTriggerList(limit: Int!, offset: Int!): PaginationListEvolutionTrigger
    evolutionTrigger(id: Int!): EvolutionTrigger
  }

  type PaginationListEvolutionTrigger{
    offset: Int
    limit: Int
    count: Int
    list: [EvolutionTrigger!]!
  }
`
