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
`;
