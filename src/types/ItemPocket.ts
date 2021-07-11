import { gql } from "apollo-server";

export default gql`
  type ItemPocket {
    id: Int!
    name: String!
    categories: [ItemCategory!]!
    names: [Name!]!
  }

type Query {
  itemPocketList(limit: Int!, offset: Int!): PaginationListItemPocket
  itemPocket(id: Int!): ItemPocket
}

type PaginationListItemPocket{
    offset: Int
    limit: Int
    count: Int
  list: [ItemPocket!]!
}
`;
