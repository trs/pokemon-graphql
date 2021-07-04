import { gql } from "apollo-server";

export default gql`
  type MoveCategory {
    id: Int!
    name: String!
    moves: [Move!]!
    descriptions: [Description!]!
  }
`;
