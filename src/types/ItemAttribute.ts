import { gql } from "apollo-server";

export default gql`
  type ItemAttribute {
    id: Int!
    name: String!
    items: [Item!]!
    names: [Name!]!
    descriptions: [Description!]!
  }

  type Query {
    itemAttributeList(limit: Int!, offset: Int): PaginationListItemAttribute
    itemAttribute(id: Int!): ItemAttribute
  }

  type PaginationListItemAttribute{
    offset: Int
    limit: Int
    count: Int
    list: [ItemAttribute!]!
  }
`;
