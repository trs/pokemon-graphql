import { gql } from "apollo-server";

export default gql`
  type EncounterConditionValue {
    id: Int!
    name: String!
    condition: EncounterCondition!
    names: [Name]
  }

  type Query {
    encounterConditionValueList(limit: Int!, offset: Int): PaginationListEncounterConditionValue
    encounterConditionValue(id: Int!): EncounterConditionValue
  }

  type PaginationListEncounterConditionValue{
    offset: Int
    limit: Int
    count: Int
    list: [EncounterConditionValue!]!
  }
`
