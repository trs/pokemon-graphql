import { gql } from "apollo-server";

export default gql`
  type PalParkArea {
    id: Int!
    name: String!
    names: [Name!]!
    pokemon_encounters: [PalParkEncounterSpecies!]!
  }

  type PalParkEncounterSpecies {
    base_score: Int!
    rate: Int!
    pokemon_species: PokemonSpecies!
  }
`;
