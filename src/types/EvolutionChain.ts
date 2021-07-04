import { gql } from "apollo-server";

export default gql`
  type EvolutionChain {
    id: Int!
    baby_trigger_item: Item
    chain: ChainLink!
  }

  type ChainLink {
    is_baby: Boolean!
    species: PokemonSpecies!
    evolution_details: [EvolutionDetail]
    evolves_to: [ChainLink]
  }

  type EvolutionDetail {
    item: Item
    name: String
    trigger: EvolutionTrigger
    gender: Int
    held_item: Item
    known_move: Move
    known_move_type: Type
    location: Location
    min_level: Int
    min_happiness: Int
    min_beauty: Int
    min_affection: Int
    needs_overworld_rain: Boolean
    party_species: PokemonSpecies
    party_type: Type
    relative_physical_stats: Int
    time_of_day: String
    trade_species: PokemonSpecies
    turn_upside_down: Boolean
  }
`
