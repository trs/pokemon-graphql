import { gql } from "apollo-server";

export default gql`
  type ItemFlingEffect {
    id: Int!
    name: String!
    effect_entries: [Effect!]!
    items: [Item!]!
  }

  type Query {
    itemFlingEffectList(limit: Int!, offset: Int): PaginationListItemFlingEffect
    itemFlingEffect(id: Int!): ItemFlingEffect
  }

  type PaginationListItemFlingEffect{
    offset: Int
    limit: Int
    count: Int
    list: [ItemFlingEffect!]!
  }
`;
