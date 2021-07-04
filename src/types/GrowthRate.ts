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
`
