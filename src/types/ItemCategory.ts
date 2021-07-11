import { gql } from "apollo-server";

export default gql`
  type ItemCategory {
    id: Int!
    name: String!
    items: [Item!]!
    names: [Name!]!
    pocket: ItemPocket!
  }

  type Query {
    itemCategoryList(limit: Int!, offset: Int!): PaginationListItemCategory
    itemCategory(id: Int!): ItemCategory
  }

  type PaginationListItemCategory{
    offset: Int
    limit: Int
    count: Int
    list: [ItemCategory!]!
  }
`;
