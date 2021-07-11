import { gql } from "apollo-server";

export default gql`
  type MoveAilment {
    id: Int!
    name: String!
    moves: [Move!]!
    names: [Name!]!
  }

type Query {
  moveAilmentList(limit: Int!, offset: Int): PaginationListMoveAilment
  moveAilment(id: Int!): MoveAilment
}

type PaginationListMoveAilment{
    offset: Int
    limit: Int
    count: Int
  list: [MoveAilment!]!
}
`;
