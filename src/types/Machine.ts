import { gql } from "apollo-server";

export default gql`
  type Machine {
    id: Int!
    item: Item!
    move: Move!
    version_group: VersionGroup!
  }
`;
