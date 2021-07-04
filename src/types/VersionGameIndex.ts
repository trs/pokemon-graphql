import { gql } from "apollo-server";

export default gql`
  type VersionGameIndex {
    game_index: Int!
    version: Version!
  }
`
