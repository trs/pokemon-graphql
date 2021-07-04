import { gql } from "apollo-server";

export default gql`
  type ItemCategory {
    id: Int!
    name: String!
    items: [Item!]!
    names: [Name!]!
    pocket: ItemPocket!
  }
`;
