import { gql } from "apollo-server";

export default gql`
  type VerboseEffect {
    effect: String!
    short_effect: String!
    language: Language!
  }
`
