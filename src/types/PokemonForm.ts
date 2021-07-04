import { gql } from "apollo-server";

export default gql`
  type PokemonForm {
    id: Int!
    name: String!
    order: Int!
    form_order: Int!
    is_default: Boolean!
    is_battle_only: Boolean!
    is_mega: Boolean!
    form_name: String!
    pokemon: Pokemon!
    sprites: PokemonFormSprites!
    version_group: VersionGroup!
    names: [Name!]!
    form_names: [Name!]!
  }

  type PokemonFormSprites {
    front_default: String!
    front_shiny: String!
    back_default: String!
    back_shiny: String!
  }
`;
