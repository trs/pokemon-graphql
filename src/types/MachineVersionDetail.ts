import { gql } from "apollo-server";

export default gql`
  type MachineVersionDetail {
    machine: Machine!
    version_group: VersionGroup!
  }
`;
