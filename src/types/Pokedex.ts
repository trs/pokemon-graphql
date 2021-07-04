import { gql } from "apollo-server";

export default gql`
  type Pokedex {
    id: Int!
    name: String!
    is_main_series: Boolean!
    descriptions: [Description!]!
    names: [Name!]!
    pokemon_entries: [PokemonEntry!]!
    region: Region!
    version_groups: [VersionGroup!]!
  }

  type PokemonEntry {
    entry_number: Int!
    pokemon_species: PokemonSpecies!
  }
`;
