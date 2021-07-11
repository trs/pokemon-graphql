import { gql } from "apollo-server";

export default gql`
  type GrowthRate {
    id: Int!
    name: String!
    formula: String!
    descriptions: [Description!]!
    levels: [GrowthRateExperienceLevel!]!
    pokemon_species: [PokemonSpecies!]!
  }

  type GrowthRateExperienceLevel {
    level: Int!
    experience: Int!
  }

  type Query {
    growthRateList(limit: Int!, offset: Int!): PaginationListGrowthRate
    growthRate(id: Int!): GrowthRate
  }

  type PaginationListGrowthRate{
    offset: Int
    limit: Int
    count: Int
    list: [GrowthRate!]!
  }
`
