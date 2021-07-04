import { gql } from "apollo-server";

export default gql`
  type EvolutionTrigger {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }
`
