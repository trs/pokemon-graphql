import { gql } from "apollo-server";

export default gql`
  type Location {
    id: Int!
    name: String!
    region: Region!
    names: [Name!]!
    game_indices: [GenerationGameIndex!]!
    areas: [LocationArea!]!
  }
`;
