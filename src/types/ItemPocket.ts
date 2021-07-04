import { gql } from "apollo-server";

export default gql`
  type ItemPocket {
    id: Int!
    name: String!
    categories: [ItemCategory!]!
    names: [Name!]!
  }
`;
