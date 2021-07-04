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
`;
