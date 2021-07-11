import { gql } from "apollo-server";

export default gql`
  type MoveLearnMethod {
    id: Int!
    name: String!
    descriptions: [Description!]!
    names: [Name!]!
    version_groups: [VersionGroup!]!
  }

type Query {
  moveLearnMethodList(limit: Int!, offset: Int!): PaginationListMoveLearnMethod
  moveLearnMethod(id: Int!): MoveLearnMethod
}

type PaginationListMoveLearnMethod{
    offset: Int
    limit: Int
    count: Int
  list: [MoveLearnMethod!]!
}
`;
