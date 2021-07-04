import { gql } from "apollo-server";

export default gql`
  type Description {
    description: String!
    language: Language!
  }
`;
