import { gql } from "apollo-server";

export default gql`
  type Query {
    abilityList(limit: Int!, offset: Int!): PaginationListAbility
    ability(id: Int!): Ability

    pokemonList(limit: Int!, offset: Int!): PaginationListPokemon
    pokemon(id: Int!): Pokemon

    typeList(limit: Int!, offset: Int!): PaginationListType
    type(id: Int!): Type
  }

  type PaginationListAbility {
    offset: Int
    limit: Int
    count: Int
    list: [Ability!]!
  }

  type PaginationListPokemon {
    offset: Int
    limit: Int
    count: Int
    list: [Pokemon!]!
  }

  type PaginationListType {
    offset: Int
    limit: Int
    count: Int
    list: [Type!]!
  }
`;
