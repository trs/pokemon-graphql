import { gql } from "apollo-server";

export default gql`
  type Characteristic {
    id: Int!
    gene_modulo: Int!
    possible_values: [Int!]!
    highest_stat: Stat!
    descriptions: [Description!]!
  }

  type Query {
    characteristicList(limit: Int!, offset: Int!): PaginationListCharacteristic
    characteristic(id: Int!): Characteristic
  }

  type PaginationListCharacteristic{
    offset: Int
    limit: Int
    count: Int
    list: [Characteristic!]!
  }
`;
