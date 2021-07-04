import { gql } from "apollo-server";

export default gql`
  type Pokemon {
    id: Int!
    name: String!
    base_experience: Int!
    height: Int!
    is_default: Boolean!
    order: Int!
    weight: Int!
    abilities: [PokemonAbility!]!
    forms: [PokemonForm!]!
    game_indices: [VersionGameIndex!]!
    held_items: [PokemonHeldItem!]!
    location_area_encounters: String!
    moves: [PokemonMove!]!
    sprites: PokemonSprites!
    species: PokemonSpecies!
    stats: [PokemonStat!]!
    types: [PokemonType!]!
  }

  type PokemonAbility {
    is_hidden: Boolean!
    slot: Int!
    ability: Ability!
  }

  type PokemonType {
    slot: Int!
    type: Type!
  }

  type PokemonHeldItem {
    item: Item!
    version_details: [PokemonHeldItemVersion!]!
  }

  type PokemonHeldItemVersion {
    version: Version!
    rarity: Int!
  }

  type PokemonMove {
    move: Move!
    version_group_details: [PokemonMoveVersion!]!
  }

  type PokemonMoveVersion {
    move_learn_method: MoveLearnMethod!
    version_group: VersionGroup!
    level_learned_at: Int
  }

  type PokemonStat {
    stat: Stat!
    effort: Int!
    base_state: Int!
  }

  type PokemonSprites {
    front_default: String!
    front_shiny: String!
    front_female: String!
    front_shiny_female: String!
    back_default: String!
    back_shiny: String!
    back_female: String!
    back_shiny_female: String!
  }
`
