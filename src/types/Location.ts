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

type Query {
  locationList(limit: Int!, offset: Int): PaginationListLocation
  location(id: Int!): Location
}

type PaginationListLocation{
    offset: Int
    limit: Int
    count: Int
  list: [Location!]!
}
`;
