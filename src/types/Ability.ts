import { gql } from "apollo-server";

export default gql`
  type Ability {
    id: Int!
    name: String!
    is_main_series: Boolean!
    generation: Generation!
    names: [Name!]!
    effect_entries: [VerboseEffect!]!
    effect_changes: [AbilityEffectChange!]!
    flavor_text_entries: [AbilityFlavorText!]!
    pokemon(limit: Int!, offset: Int): PaginationListAbilityPokemon!
  }

  type AbilityEffectChange {
    effect_entries: [Effect!]!
    version_group: VersionGroup!
  }

  type AbilityFlavorText {
    flavor_text: String!
    language: Language!
    version_group: VersionGroup!
  }

  type AbilityPokemon  {
    is_hidden: Boolean!
    slot: Int!
    pokemon: Pokemon!
  }

  type Query {
    abilityList(limit: Int!, offset: Int): PaginationListAbility
    ability(id: Int!): Ability
  }

  type PaginationListAbility{
    offset: Int
    limit: Int
    count: Int
    list: [Ability!]!
  }

  type PaginationListAbilityPokemon {
    offset: Int
    limit: Int
    count: Int
    list: [AbilityPokemon!]!
  }
`;
