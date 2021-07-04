import { gql } from "apollo-server";

export default gql`
  type ContestEffect {
    id: Int!
    appeal: Int!
    jam: Int!
    effect_entries: [Effect!]!
    flavor_text_entries: [FlavorText!]!
  }
`
