import { gql } from "apollo-server";

export default gql`
  type BerryFirmness {
    id: Int!
    name: String!
    berries(limit: Int!, offset: Int): PaginationListBerry!
    names: [Name!]!
  }

  type Query {
    berryFirmnessList(limit: Int!, offset: Int): PaginationListBerryFirmness
    berryFirmness(id: Int!): BerryFirmness
  }

  type PaginationListBerryFirmness{
    offset: Int
    limit: Int
    count: Int
    list: [BerryFirmness!]!
  }
`
