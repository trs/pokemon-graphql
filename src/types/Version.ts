import { gql } from "apollo-server";

export default gql`
  type Version {
    id: Int!
    name: String!
    names: [Name!]!
    version_group: VersionGroup!
  }
`;
