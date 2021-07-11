import { gql } from "apollo-server";

export default gql`
  type Type {
    id: Int!
    name: String!
    damage_relations: TypeRelations!
    game_indices: [GenerationGameIndex!]!
    generation: Generation!
    move_damage_class: MoveDamageClass!
    names: [Name!]!
    pokemon: [TypePokemon!]!
    moves: [Move!]!
  }

  type TypePokemon {
    slot: Int!
    pokemon: Pokemon!
  }

  type TypeRelations {
    no_damage_to: [Type!]!
    half_damage_to: [Type!]!
    double_damage_to: [Type!]!
    no_damage_from: [Type!]!
    half_damage_from: [Type!]!
    double_damage_from: [Type!]!
  }

type Query {
  typeList(limit: Int!, offset: Int): PaginationListType
  type(id: Int!): Type
}

type PaginationListType{
    offset: Int
    limit: Int
    count: Int
  list: [Type!]!
}
`;
