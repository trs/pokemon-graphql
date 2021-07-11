import { gql } from "apollo-server";

export default gql`
  type Stat {
    id: Int!
    name: String!
    game_index: Int!
    is_battle_only: Boolean!
    affecting_moves: MoveStatAffectSets!
    affecting_natures: NatureStatAffectSets!
    characteristics: [Characteristic!]!
    move_damage_class: MoveDamageClass!
    names: [Name!]!
  }

  type MoveStatAffectSets {
    increase: [MoveStatAffect!]!
    decrease: [MoveStatAffect!]!
  }

  type MoveStatAffect {
    change: Int!
    move: Move!
  }

  type NatureStatAffectSets {
    increase: [Nature!]!
    decrease: [Nature!]!
  }

type Query {
  statList(limit: Int!, offset: Int!): PaginationListStat
  stat(id: Int!): Stat
}

type PaginationListStat{
    offset: Int
    limit: Int
    count: Int
  list: [Stat!]!
}
`;
