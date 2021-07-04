import { gql } from "apollo-server";

export default gql`
  type GenerationGameIndex {
    game_index: Int!
    generation: Generation!
  }
`;
