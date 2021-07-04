import { gql } from "apollo-server";

export default gql`
  type BerryFirmness {
    id: Int!
    name: String!
    berries: [Berry!]!
    names: [Name!]!
  }
`
