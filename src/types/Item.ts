import { gql } from "apollo-server";

export default gql`
  type Item {
    id: Int!
    name: String!
    cost: Int!
    fling_power: Int!
    fling_effect: ItemFlingEffect!
    attributes: [ItemAttribute!]!
    category: ItemCategory!
    effect_entries: [VerboseEffect!]!
    flavor_text_entries: [VersionGroupFlavorText!]!
    game_indices: [GenerationGameIndex!]!
    names: [Name!]!
    sprites: ItemSprites!
    held_by_pokemon: [ItemHolderPokemon!]!
    baby_trigger_for: EvolutionChain!
    machines: [MachineVersionDetail!]!
  }

  type ItemSprites {
    default: String!
  }

  type ItemHolderPokemon {
    pokemon: Pokemon!
    version_details: [ItemHolderPokemonVersionDetail!]!
  }

  type ItemHolderPokemonVersionDetail {
    rarity: Int!
    version: Version!
  }
`;
