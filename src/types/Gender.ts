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
`
