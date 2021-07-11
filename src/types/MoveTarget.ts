import { gql } from "apollo-server";

export default gql`
  type MoveTarget {
    id: Int!
    name: String!
    descriptions: [Description!]!
    moves: [Move!]!
    names: [Name!]!
  }

type Query {
  moveTargetList(limit: Int!, offset: Int!): PaginationListMoveTarget
  moveTarget(id: Int!): MoveTarget
}

type PaginationListMoveTarget{
    offset: Int
    limit: Int
    count: Int
  list: [MoveTarget!]!
}
`;
