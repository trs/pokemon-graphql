import { gql } from "apollo-server";

export default gql`
  type Generation {
    id: Int!
    name: String!
    abilities: [Ability!]!
    names: [Name!]!
    main_region: Region!
    moves: [Move!]!
    pokemon_species: [PokemonSpecies!]!
    types: [Type!]!
    version_groups: [VersionGroup!]!
  }

  type Query {
    generationList(limit: Int!, offset: Int!): PaginationListGeneration
    generation(id: Int!): Generation
  }

  type PaginationListGeneration{
    offset: Int
    limit: Int
    count: Int
    list: [Generation!]!
  }
`;
