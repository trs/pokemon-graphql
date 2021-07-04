import { gql } from "apollo-server";

export default gql`
  type Effect {
    effect: String!
    language: Language!
  }
`
