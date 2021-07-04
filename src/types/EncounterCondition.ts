import { gql } from "apollo-server";

export default gql`
  type EncounterCondition {
    id: Int!
    name: String!
    values: [EncounterConditionValue!]!
    names: [Name!]!
  }
`
