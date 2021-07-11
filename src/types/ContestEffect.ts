import { gql } from "apollo-server";

export default gql`
  type ContestEffect {
    id: Int!
    appeal: Int!
    jam: Int!
    effect_entries: [Effect!]!
    flavor_text_entries: [FlavorText!]!
  }

  type Query {
    contestEffectList(limit: Int!, offset: Int): PaginationListContestEffect
    contestEffect(id: Int!): ContestEffect
  }

  type PaginationListContestEffect{
    offset: Int
    limit: Int
    count: Int
    list: [ContestEffect!]!
  }
`
