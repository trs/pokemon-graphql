import { gql } from "apollo-server";

export default gql`
  type ItemAttribute {
    id: Int!
    name: String!
    items: [Item!]!
    names: [Name!]!
    descriptions: [Description!]!
  }
`;
