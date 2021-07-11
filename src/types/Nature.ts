import { gql } from "apollo-server";

export default gql`
  type Nature {
    id: Int!
    name: String!
    decreased_stat: Stat!
    increased_stat: Stat!
    hates_flavor: BerryFlavor!
    likes_flavor: BerryFlavor!
    pokeathlon_stat_changes: [NatureStatChange!]!
    move_battle_style_preferences: [MoveBattleStylePreference!]!
    names: [Name!]!
  }

  type NatureStatChange {
    max_change: Int!
    pokeathlon_stat: PokeathlonStat!
  }

  type MoveBattleStylePreference {
    low_hp_preference: Int!
    high_hp_preference: Int!
    move_battle_style: MoveBattleStyle!
  }

type Query {
  natureList(limit: Int!, offset: Int): PaginationListNature
  nature(id: Int!): Nature
}

type PaginationListNature{
    offset: Int
    limit: Int
    count: Int
  list: [Nature!]!
}
`;
