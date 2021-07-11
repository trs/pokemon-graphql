import { gql } from "apollo-server";

export default gql`
  type SuperContestEffect {
    id: Int!
    appeal: Int!
    flavor_text_entries: [FlavorText!]!
    moves: [Move!]!
  }

  type Query {
    superContestEffectList(limit: Int!, offset: Int): PaginationListSuperContestEffect
    superContestEffect(id: Int!): SuperContestEffect
  }

  type PaginationListSuperContestEffect{
    offset: Int
    limit: Int
    count: Int
    list: [SuperContestEffect!]!
  }
`
