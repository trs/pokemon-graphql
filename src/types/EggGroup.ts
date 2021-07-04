import { gql } from "apollo-server";

export default gql`
  type EggGroup {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }
`
