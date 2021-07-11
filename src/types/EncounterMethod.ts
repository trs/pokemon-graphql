import { gql } from "apollo-server";

export default gql`
  type EncounterMethod {
    id: Int!
    name: String!
    order: Int!
    names: [Name!]!
  }

  type Query {
    encounterMethodList(limit: Int!, offset: Int): PaginationListEncounterMethod
    encounterMethod(id: Int!): EncounterMethod
  }

  type PaginationListEncounterMethod{
    offset: Int
    limit: Int
    count: Int
    list: [EncounterMethod!]!
  }
`
