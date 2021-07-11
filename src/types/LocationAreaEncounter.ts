import { gql } from "apollo-server";

export default gql`
  type LocationAreaEncounter {
    location_area: LocationArea!
    version_details: [VersionEncounterDetail!]!
  }

  type Query {
    locationAreaEncounterList(limit: Int!, offset: Int!): PaginationListLocationAreaEncounter
  }

  type PaginationListLocationAreaEncounter{
    offset: Int
    limit: Int
    count: Int
    list: [LocationAreaEncounter!]!
  }
`;
