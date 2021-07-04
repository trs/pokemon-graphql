import { gql } from "apollo-server";

export default gql`
  type SuperContestEffect {
    id: Int!
    appeal: Int!
    flavor_text_entries: [FlavorText!]!
    moves: [Move!]!
  }
`
