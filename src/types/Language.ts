import { gql } from "apollo-server";

export default gql`
  type Language {
    id: Int!
    name: String!
    official: Boolean!
    iso639: String!
    iso3166: String!
    names: [Name!]!
  }
`
