import { gql } from "apollo-server";

export default gql`
  type Encounter {
    min_level: Int!
    max_level: Int!
    condition_values: [EncounterConditionValue!]!
    change: Int!
    method: EncounterMethod!
  }

  type Query {
    encounterList(limit: Int!, offset: Int!): PaginationListEncounter
    encounter(id: Int!): Encounter
  }

  type PaginationListEncounter{
    offset: Int
    limit: Int
    count: Int
    list: [Encounter!]!
  }
`;
