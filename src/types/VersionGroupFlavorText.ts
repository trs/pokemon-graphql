import { gql } from "apollo-server";

export default gql`
  type VersionGroupFlavorText {
    text: String!
    language: Language!
    version_group: VersionGroup!
  }
`;
