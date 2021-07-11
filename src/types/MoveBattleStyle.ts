import { gql } from "apollo-server";

export default gql`
  type MoveBattleStyle {
    id: Int!
    name: String!
    names: [Name!]!
  }

type Query {
  moveBattleStyleList(limit: Int!, offset: Int): PaginationListMoveBattleStyle
  moveBattleStyle(id: Int!): MoveBattleStyle
}

type PaginationListMoveBattleStyle{
    offset: Int
    limit: Int
    count: Int
  list: [MoveBattleStyle!]!
}
`;
