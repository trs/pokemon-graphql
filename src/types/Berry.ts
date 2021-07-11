import { gql } from "apollo-server";

export default gql`
  type Berry {
    id: Int!
    name: String!
    growth_time: Int!
    max_harvest: Int!
    natural_gift_power: Int!
    size: Int!
    smoothness: Int!
    soil_dryness: Int!
    firmness: BerryFirmness!
    flavors(limit: Int!, offset: Int): PaginationListBerryFlavorMap!
    item: Item!
    natural_gift_type: Type!
  }

  type BerryFlavorMap {
    potency: Int!
    flavor: BerryFlavor!
  }

  type Query {
    berryList(limit: Int!, offset: Int): PaginationListBerry
    berry(id: Int!): Berry
  }

  type PaginationListBerry{
    offset: Int
    limit: Int
    count: Int
    list: [Berry!]!
  }

type PaginationListBerryFlavorMap {
  offset: Int
  limit: Int
  count: Int
  list: [BerryFlavorMap!]!
}
`;
