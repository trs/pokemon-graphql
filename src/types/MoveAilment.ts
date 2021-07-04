import { gql } from "apollo-server";

export default gql`
  type MoveAilment {
    id: Int!
    name: String!
    moves: [Move!]!
    names: [Name!]!
  }
`;
