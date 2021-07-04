import { gql } from "apollo-server";

export default gql`
  type MoveBattleStyle {
    id: Int!
    name: String!
    names: [Name!]!
  }
`;
