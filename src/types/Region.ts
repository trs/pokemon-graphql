import { gql } from "apollo-server";

export default gql`
  type Region {
    id: Int!
    name: String!
    locations: [Location!]!
    names: [Name!]!
    main_generation: Generation!
    pokedexes: [Pokedex!]!
    version_groups: [VersionGroup!]!
  }

type Query {
  regionList(limit: Int!, offset: Int): PaginationListRegion
  region(id: Int!): Region
}

type PaginationListRegion{
    offset: Int
    limit: Int
    count: Int
  list: [Region!]!
}
`;
