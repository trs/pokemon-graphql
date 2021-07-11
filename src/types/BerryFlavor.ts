import { gql } from "apollo-server";

export default gql`
  type BerryFlavor {
    id: Int!
    name: String!
    berries: PaginationListBerryFlavorMap!
    contest_type: ContestType!
    names: [Name!]!
  }

  type FlavorBerryMap {
    potency: Int!
    berry: Berry!
  }

  type Query {
    berryFlavorList(limit: Int!, offset: Int): PaginationListBerryFlavor
    berryFlavor(id: Int!): BerryFlavor
  }

  type PaginationListBerryFlavor{
    offset: Int
    limit: Int
    count: Int
    list: [BerryFlavor!]!
  }
`
