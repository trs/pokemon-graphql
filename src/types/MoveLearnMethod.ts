import { gql } from "apollo-server";

export default gql`
  type MoveLearnMethod {
    id: Int!
    name: String!
    descriptions: [Description!]!
    names: [Name!]!
    version_groups: [VersionGroup!]!
  }
`;
