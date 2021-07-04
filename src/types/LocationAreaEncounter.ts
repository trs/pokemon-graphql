import { gql } from "apollo-server";

export default gql`
  type LocationAreaEncounter {
    location_area: LocationArea!
    version_details: [VersionEncounterDetail!]!
  }
`;
