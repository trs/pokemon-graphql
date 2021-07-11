import { gql } from "apollo-server";

export default gql`
  type Move {
    id: Int!
    name: String!
    accuracy: Int!
    effect_change: Int!
    pp: Int!
    priority: Int!
    power: Int!
    contest_combos: ContestComboSets!
    contest_type: ContestType!
    contest_effect: ContestEffect!
    damage_class: MoveDamageClass!
    effect_entries: [VerboseEffect!]!
    effect_changes: [AbilityEffectChange!]!
    flavor_text_entries: [MoveFlavorText!]!
    generation: Generation!
    machines: [MachineVersionDetail!]!
    meta: MoveMetaData!
    names: [Name!]!
    past_values: [PastMoveStatValues!]!
    stat_changes: [MoveStatChange!]!
    super_contest_effect: SuperContestEffect!
    target: MoveTarget!
    type: Type!
  }

  type ContestComboSets {
    normal: ContestComboDetail!
    super: ContestComboDetail!
  }

  type ContestComboDetail {
    use_before: [Move!]!
    use_after: [Move!]!
  }

  type MoveFlavorText {
    flavor_text: String!
    language: Language!
    version_group: VersionGroup!
  }

  type MoveMetaData {
    ailment: MoveAilment!
    category: MoveCategory!
    min_hits: Int
    max_hits: Int
    min_turns: Int
    max_turns: Int
    drain: Int
    healing: Int
    crit_rate: Int!
    ailment_change: Int!
    flinch_change: Int!
    stat_chance: Int!
  }

  type MoveStatChange {
    change: Int!
    stat: Stat!
  }

  type PastMoveStatValues {
    accuracy: Int!
    effect_change: Int!
    power: Int!
    pp: Int!
    effect_entries: VerboseEffect!
    type: Type!
    version_group: VersionGroup!
  }

  type Query {
    moveList(limit: Int!, offset: Int): PaginationListMove
    move(id: Int!): Move
  }

  type PaginationListMove{
    offset: Int
    limit: Int
    count: Int
    list: [Move!]!
  }
`;
