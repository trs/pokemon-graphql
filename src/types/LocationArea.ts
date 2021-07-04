import { gql } from "apollo-server";

export default gql`
  type LocationArea {
    id: Int!
    name: String!
    game_index: Int!
    encounter_method_rates: [EncounterMethodRate!]!
    location: Location!
    names: [Name!]!
    pokemon_encounters: [PokemonEncounter!]!
  }

  type EncounterMethodRate {
    encounter_method: EncounterMethod!
    version_details: [EncounterVersionDetails!]!
  }

  type EncounterVersionDetails {
    rate: Int!
    version: Version!
  }

  type PokemonEncounter {
    pokemon: Pokemon!
    version_details: [VersionEncounterDetail]
  }
`;
