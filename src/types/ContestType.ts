import { gql } from "apollo-server";

export default gql`
  type ContestType {
    id: Int!
    name: String!
    berry_flavor: BerryFlavor!
    names: [ContestName!]!
  }

  type ContestName {
    name: String!
    color: String!
    language: Language!
  }

  type Query {
    contestTypeList(limit: Int!, offset: Int!): PaginationListContestType
    contestType(id: Int!): ContestType
  }

  type PaginationListContestType{
    offset: Int
    limit: Int
    count: Int
    list: [ContestType!]!
  }
`
