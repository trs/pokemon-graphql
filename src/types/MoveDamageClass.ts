import { gql } from "apollo-server";

export default gql`
  type MoveDamageClass {
    id: Int!
    name: String!
    descriptions: [Description!]!
    moves: [Move!]!
    names: [Name!]!
  }

type Query {
  moveDamageClassList(limit: Int!, offset: Int): PaginationListMoveDamageClass
  moveDamageClass(id: Int!): MoveDamageClass
}

type PaginationListMoveDamageClass{
    offset: Int
    limit: Int
    count: Int
  list: [MoveDamageClass!]!
}
`;
