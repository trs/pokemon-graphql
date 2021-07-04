import { gql } from "apollo-server";

export default gql`
  type BerryFlavor {
    id: Int!
    name: String!
    berries: [BerryFlavorMap!]!
    contest_type: ContestType!
    names: [Name!]!
  }

  type FlavorBerryMap {
    potency: Int!
    berry: Berry!
  }
`
