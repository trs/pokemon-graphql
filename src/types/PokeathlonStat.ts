import { gql } from "apollo-server";

export default gql`
  type PokeathlonStat {
    id: Int!
    name: String!
    names: [Name!]!
    affecting_natures: NaturePokeathlonStatAffectSets!
  }

  type NaturePokeathlonStatAffectSets {
    increase: [NaturePokeathlonStatAffect!]!
    decrease: [NaturePokeathlonStatAffect!]!
  }

  type NaturePokeathlonStatAffect {
    max_change: Int!
    nature: Nature!
  }
`;
