import { gql } from "apollo-server";

export default gql`
  type Machine {
    id: Int!
    item: Item!
    move: Move!
    version_group: VersionGroup!
  }

type Query {
  machineList(limit: Int!, offset: Int): PaginationListMachine
  machine(id: Int!): Machine
}

type PaginationListMachine{
    offset: Int
    limit: Int
    count: Int
  list: [Machine!]!
}
`;
