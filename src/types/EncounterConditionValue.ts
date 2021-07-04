import { gql } from "apollo-server";

export default gql`
  type EncounterConditionValue {
    id: Int!
    name: String!
    condition: EncounterCondition!
    names: [Name]
  }
`
