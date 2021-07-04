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
`
