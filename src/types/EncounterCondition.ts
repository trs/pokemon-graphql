import { gql } from "apollo-server";

export default gql`
  type EncounterCondition {
    id: Int!
    name: String!
    values: [EncounterConditionValue!]!
    names: [Name!]!
  }

type Query {
  encounterConditionList(limit: Int!, offset: Int!): PaginationListEncounterCondition
  encounterCondition(id: Int!): EncounterCondition
}

type PaginationListEncounterCondition{
    offset: Int
    limit: Int
    count: Int
  list: [EncounterCondition!]!
}
`
