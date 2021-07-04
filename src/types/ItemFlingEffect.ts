import { gql } from "apollo-server";

export default gql`
  type ItemFlingEffect {
    id: Int!
    name: String!
    effect_entries: [Effect!]!
    items: [Item!]!
  }
`;
