import { gql } from "apollo-server";

export default gql`
  type VersionGroup {
    id: Int!
    name: String!
    order: Int!
    generation: Generation!
    move_learn_methods: [MoveLearnMethod!]!
    pokedexes: [Pokedex!]!
    regions: [Region!]!
    versions: [Version!]!
  }

type Query {
  versionGroupList(limit: Int!, offset: Int!): PaginationListVersionGroup
  versionGroup(id: Int!): VersionGroup
}

type PaginationListVersionGroup{
    offset: Int
    limit: Int
    count: Int
  list: [VersionGroup!]!
}
`;
