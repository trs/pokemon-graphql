import { gql } from "apollo-server";

export default gql`
  type MoveTarget {
    id: Int!
    name: String!
    descriptions: [Description!]!
    moves: [Move!]!
    names: [Name!]!
  }
`;
