import { gql } from "apollo-server";

export default gql`
  type Characteristic {
    id: Int!
    gene_modulo: Int!
    possible_values: [Int!]!
    highest_stat: Stat!
    descriptions: [Description!]!
  }
`;
