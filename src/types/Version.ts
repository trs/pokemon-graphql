import { gql } from "apollo-server";

export default gql`
  type Version {
    id: Int!
    name: String!
    names: [Name!]!
    version_group: VersionGroup!
  }

type Query {
  versionList(limit: Int!, offset: Int!): PaginationListVersion
  version(id: Int!): Version
}

type PaginationListVersion{
    offset: Int
    limit: Int
    count: Int
  list: [Version!]!
}
`;
