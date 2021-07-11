import { gql } from "apollo-server";

export default gql`
  type MoveCategory {
    id: Int!
    name: String!
    moves: [Move!]!
    descriptions: [Description!]!
  }

type Query {
  moveCategoryList(limit: Int!, offset: Int): PaginationListMoveCategory
  moveCategory(id: Int!): MoveCategory
}

type PaginationListMoveCategory{
    offset: Int
    limit: Int
    count: Int
  list: [MoveCategory!]!
}
`;
