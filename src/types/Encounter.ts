import { gql } from "apollo-server";

export default gql`
  type Encounter {
    min_level: Int!
    max_level: Int!
    condition_values: [EncounterConditionValue!]!
    change: Int!
    method: EncounterMethod!
  }
`;
