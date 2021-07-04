import { gql } from "apollo-server";

export default gql`
  type PokemonShape {
    id: Int!
    name: String!
    awesome_names: [AwesomeName!]!
    names: [Name!]!
    pokemon_species: [PokemonSpecies!]!
  }

  type AwesomeName {
    awesome_name: String!
    language: Language!
  }
`;
