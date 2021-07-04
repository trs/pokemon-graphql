import { gql } from "apollo-server";

export default gql`
  type VersionEncounterDetail {
    version: Version!
    max_change: Int!
    encounter_details: [Encounter!]!
  }
`
