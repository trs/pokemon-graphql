import { gql } from "apollo-server";

export default gql`
  type GenerationGameIndex {
    game_index: Int!
    generation: Generation!
  }

  type Query {
    generationGameIndexList(limit: Int!, offset: Int): PaginationListGenerationGameIndex
    generationGameIndex(id: Int!): GenerationGameIndex
  }

  type PaginationListGenerationGameIndex{
    offset: Int
    limit: Int
    count: Int
    list: [GenerationGameIndex!]!
  }
`;
