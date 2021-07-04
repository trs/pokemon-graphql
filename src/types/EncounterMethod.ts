import { gql } from "apollo-server";

export default gql`
  type EncounterMethod {
    id: Int!
    name: String!
    order: Int!
    names: [Name!]!
  }
`
