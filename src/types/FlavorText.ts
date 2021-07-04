import { gql } from "apollo-server";

export default gql`
  type FlavorText {
    flavor_text: String!
    language: Language!
    version: Version!
  }
`
