import { gql } from "apollo-server";

export default gql`
  type Name {
    name: String!
    language: Language!
  }
`
