import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Ability = {
  __typename?: 'Ability';
  id: Scalars['Int'];
  name: Scalars['String'];
  is_main_series: Scalars['Boolean'];
  generation: Generation;
  names: Array<Name>;
  effect_entries: Array<VerboseEffect>;
  effect_changes: Array<AbilityEffectChange>;
  flavor_text_entries: Array<AbilityFlavorText>;
  pokemon: Array<AbilityPokemon>;
};

export type AbilityEffectChange = {
  __typename?: 'AbilityEffectChange';
  effect_entries: Array<Effect>;
  version_group: VersionGroup;
};

export type AbilityFlavorText = {
  __typename?: 'AbilityFlavorText';
  flavor_text: Scalars['String'];
  language: Language;
  version_group: VersionGroup;
};

export type AbilityPokemon = {
  __typename?: 'AbilityPokemon';
  is_hidden: Scalars['Boolean'];
  slot: Scalars['Int'];
  pokemon: Pokemon;
};

export type AwesomeName = {
  __typename?: 'AwesomeName';
  awesome_name: Scalars['String'];
  language: Language;
};

export type Berry = {
  __typename?: 'Berry';
  id: Scalars['Int'];
  name: Scalars['String'];
  growth_time: Scalars['Int'];
  max_harvest: Scalars['Int'];
  natural_gift_power: Scalars['Int'];
  size: Scalars['Int'];
  smoothness: Scalars['Int'];
  soil_dryness: Scalars['Int'];
  firmness: BerryFirmness;
  flavors: Array<BerryFlavorMap>;
  item: Item;
  natural_gift_type: Type;
};

export type BerryFirmness = {
  __typename?: 'BerryFirmness';
  id: Scalars['Int'];
  name: Scalars['String'];
  berries: Array<Berry>;
  names: Array<Name>;
};

export type BerryFlavor = {
  __typename?: 'BerryFlavor';
  id: Scalars['Int'];
  name: Scalars['String'];
  berries: Array<BerryFlavorMap>;
  contest_type: ContestType;
  names: Array<Name>;
};

export type BerryFlavorMap = {
  __typename?: 'BerryFlavorMap';
  potency: Scalars['Int'];
  flavor: BerryFlavor;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ChainLink = {
  __typename?: 'ChainLink';
  is_baby: Scalars['Boolean'];
  species: PokemonSpecies;
  evolution_details?: Maybe<Array<Maybe<EvolutionDetail>>>;
  evolves_to?: Maybe<Array<Maybe<ChainLink>>>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  id: Scalars['Int'];
  gene_modulo: Scalars['Int'];
  possible_values: Array<Scalars['Int']>;
  highest_stat: Stat;
  descriptions: Array<Description>;
};

export type ContestComboDetail = {
  __typename?: 'ContestComboDetail';
  use_before: Array<Move>;
  use_after: Array<Move>;
};

export type ContestComboSets = {
  __typename?: 'ContestComboSets';
  normal: ContestComboDetail;
  super: ContestComboDetail;
};

export type ContestEffect = {
  __typename?: 'ContestEffect';
  id: Scalars['Int'];
  appeal: Scalars['Int'];
  jam: Scalars['Int'];
  effect_entries: Array<Effect>;
  flavor_text_entries: Array<FlavorText>;
};

export type ContestName = {
  __typename?: 'ContestName';
  name: Scalars['String'];
  color: Scalars['String'];
  language: Language;
};

export type ContestType = {
  __typename?: 'ContestType';
  id: Scalars['Int'];
  name: Scalars['String'];
  berry_flavor: BerryFlavor;
  names: Array<ContestName>;
};

export type Description = {
  __typename?: 'Description';
  description: Scalars['String'];
  language: Language;
};

export type Effect = {
  __typename?: 'Effect';
  effect: Scalars['String'];
  language: Language;
};

export type EggGroup = {
  __typename?: 'EggGroup';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  pokemon_species: Array<PokemonSpecies>;
};

export type Encounter = {
  __typename?: 'Encounter';
  min_level: Scalars['Int'];
  max_level: Scalars['Int'];
  condition_values: Array<EncounterConditionValue>;
  change: Scalars['Int'];
  method: EncounterMethod;
};

export type EncounterCondition = {
  __typename?: 'EncounterCondition';
  id: Scalars['Int'];
  name: Scalars['String'];
  values: Array<EncounterConditionValue>;
  names: Array<Name>;
};

export type EncounterConditionValue = {
  __typename?: 'EncounterConditionValue';
  id: Scalars['Int'];
  name: Scalars['String'];
  condition: EncounterCondition;
  names?: Maybe<Array<Maybe<Name>>>;
};

export type EncounterMethod = {
  __typename?: 'EncounterMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  names: Array<Name>;
};

export type EncounterMethodRate = {
  __typename?: 'EncounterMethodRate';
  encounter_method: EncounterMethod;
  version_details: Array<EncounterVersionDetails>;
};

export type EncounterVersionDetails = {
  __typename?: 'EncounterVersionDetails';
  rate: Scalars['Int'];
  version: Version;
};

export type EvolutionChain = {
  __typename?: 'EvolutionChain';
  id: Scalars['Int'];
  baby_trigger_item?: Maybe<Item>;
  chain: ChainLink;
};

export type EvolutionDetail = {
  __typename?: 'EvolutionDetail';
  item?: Maybe<Item>;
  name?: Maybe<Scalars['String']>;
  trigger?: Maybe<EvolutionTrigger>;
  gender?: Maybe<Scalars['Int']>;
  held_item?: Maybe<Item>;
  known_move?: Maybe<Move>;
  known_move_type?: Maybe<Type>;
  location?: Maybe<Location>;
  min_level?: Maybe<Scalars['Int']>;
  min_happiness?: Maybe<Scalars['Int']>;
  min_beauty?: Maybe<Scalars['Int']>;
  min_affection?: Maybe<Scalars['Int']>;
  needs_overworld_rain?: Maybe<Scalars['Boolean']>;
  party_species?: Maybe<PokemonSpecies>;
  party_type?: Maybe<Type>;
  relative_physical_stats?: Maybe<Scalars['Int']>;
  time_of_day?: Maybe<Scalars['String']>;
  trade_species?: Maybe<PokemonSpecies>;
  turn_upside_down?: Maybe<Scalars['Boolean']>;
};

export type EvolutionTrigger = {
  __typename?: 'EvolutionTrigger';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  pokemon_species: Array<PokemonSpecies>;
};

export type FlavorBerryMap = {
  __typename?: 'FlavorBerryMap';
  potency: Scalars['Int'];
  berry: Berry;
};

export type FlavorText = {
  __typename?: 'FlavorText';
  flavor_text: Scalars['String'];
  language: Language;
  version: Version;
};

export type Gender = {
  __typename?: 'Gender';
  id: Scalars['Int'];
  name: Scalars['String'];
  pokemon_species_details: Array<PokemonSpeciesGender>;
  required_for_evolution: Array<PokemonSpecies>;
};

export type Generation = {
  __typename?: 'Generation';
  id: Scalars['Int'];
  name: Scalars['String'];
  abilities: Array<Ability>;
  names: Array<Name>;
  main_region: Region;
  moves: Array<Move>;
  pokemon_species: Array<PokemonSpecies>;
  types: Array<Type>;
  version_groups: Array<VersionGroup>;
};

export type GenerationGameIndex = {
  __typename?: 'GenerationGameIndex';
  game_index: Scalars['Int'];
  generation: Generation;
};

export type Genus = {
  __typename?: 'Genus';
  genus: Scalars['String'];
  language: Language;
};

export type GrowthRate = {
  __typename?: 'GrowthRate';
  id: Scalars['Int'];
  name: Scalars['String'];
  formula: Scalars['String'];
  descriptions: Array<Description>;
  levels: Array<GrowthRateExperienceLevel>;
  pokemon_species: Array<PokemonSpecies>;
};

export type GrowthRateExperienceLevel = {
  __typename?: 'GrowthRateExperienceLevel';
  level: Scalars['Int'];
  experience: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  fling_power: Scalars['Int'];
  fling_effect: ItemFlingEffect;
  attributes: Array<ItemAttribute>;
  category: ItemCategory;
  effect_entries: Array<VerboseEffect>;
  flavor_text_entries: Array<VersionGroupFlavorText>;
  game_indices: Array<GenerationGameIndex>;
  names: Array<Name>;
  sprites: ItemSprites;
  held_by_pokemon: Array<ItemHolderPokemon>;
  baby_trigger_for: EvolutionChain;
  machines: Array<MachineVersionDetail>;
};

export type ItemAttribute = {
  __typename?: 'ItemAttribute';
  id: Scalars['Int'];
  name: Scalars['String'];
  items: Array<Item>;
  names: Array<Name>;
  descriptions: Array<Description>;
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
  items: Array<Item>;
  names: Array<Name>;
  pocket: ItemPocket;
};

export type ItemFlingEffect = {
  __typename?: 'ItemFlingEffect';
  id: Scalars['Int'];
  name: Scalars['String'];
  effect_entries: Array<Effect>;
  items: Array<Item>;
};

export type ItemHolderPokemon = {
  __typename?: 'ItemHolderPokemon';
  pokemon: Pokemon;
  version_details: Array<ItemHolderPokemonVersionDetail>;
};

export type ItemHolderPokemonVersionDetail = {
  __typename?: 'ItemHolderPokemonVersionDetail';
  rarity: Scalars['Int'];
  version: Version;
};

export type ItemPocket = {
  __typename?: 'ItemPocket';
  id: Scalars['Int'];
  name: Scalars['String'];
  categories: Array<ItemCategory>;
  names: Array<Name>;
};

export type ItemSprites = {
  __typename?: 'ItemSprites';
  default: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  iso639: Scalars['String'];
  iso3166: Scalars['String'];
  names: Array<Name>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  region: Region;
  names: Array<Name>;
  game_indices: Array<GenerationGameIndex>;
  areas: Array<LocationArea>;
};

export type LocationArea = {
  __typename?: 'LocationArea';
  id: Scalars['Int'];
  name: Scalars['String'];
  game_index: Scalars['Int'];
  encounter_method_rates: Array<EncounterMethodRate>;
  location: Location;
  names: Array<Name>;
  pokemon_encounters: Array<PokemonEncounter>;
};

export type LocationAreaEncounter = {
  __typename?: 'LocationAreaEncounter';
  location_area: LocationArea;
  version_details: Array<VersionEncounterDetail>;
};

export type Machine = {
  __typename?: 'Machine';
  id: Scalars['Int'];
  item: Item;
  move: Move;
  version_group: VersionGroup;
};

export type MachineVersionDetail = {
  __typename?: 'MachineVersionDetail';
  machine: Machine;
  version_group: VersionGroup;
};

export type Move = {
  __typename?: 'Move';
  id: Scalars['Int'];
  name: Scalars['String'];
  accuracy: Scalars['Int'];
  effect_change: Scalars['Int'];
  pp: Scalars['Int'];
  priority: Scalars['Int'];
  power: Scalars['Int'];
  contest_combos: ContestComboSets;
  contest_type: ContestType;
  contest_effect: ContestEffect;
  damage_class: MoveDamageClass;
  effect_entries: Array<VerboseEffect>;
  effect_changes: Array<AbilityEffectChange>;
  flavor_text_entries: Array<MoveFlavorText>;
  generation: Generation;
  machines: Array<MachineVersionDetail>;
  meta: MoveMetaData;
  names: Array<Name>;
  past_values: Array<PastMoveStatValues>;
  stat_changes: Array<MoveStatChange>;
  super_contest_effect: SuperContestEffect;
  target: MoveTarget;
  type: Type;
};

export type MoveAilment = {
  __typename?: 'MoveAilment';
  id: Scalars['Int'];
  name: Scalars['String'];
  moves: Array<Move>;
  names: Array<Name>;
};

export type MoveBattleStyle = {
  __typename?: 'MoveBattleStyle';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
};

export type MoveBattleStylePreference = {
  __typename?: 'MoveBattleStylePreference';
  low_hp_preference: Scalars['Int'];
  high_hp_preference: Scalars['Int'];
  move_battle_style: MoveBattleStyle;
};

export type MoveCategory = {
  __typename?: 'MoveCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
  moves: Array<Move>;
  descriptions: Array<Description>;
};

export type MoveDamageClass = {
  __typename?: 'MoveDamageClass';
  id: Scalars['Int'];
  name: Scalars['String'];
  descriptions: Array<Description>;
  moves: Array<Move>;
  names: Array<Name>;
};

export type MoveFlavorText = {
  __typename?: 'MoveFlavorText';
  flavor_text: Scalars['String'];
  language: Language;
  version_group: VersionGroup;
};

export type MoveLearnMethod = {
  __typename?: 'MoveLearnMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
  descriptions: Array<Description>;
  names: Array<Name>;
  version_groups: Array<VersionGroup>;
};

export type MoveMetaData = {
  __typename?: 'MoveMetaData';
  ailment: MoveAilment;
  category: MoveCategory;
  min_hits?: Maybe<Scalars['Int']>;
  max_hits?: Maybe<Scalars['Int']>;
  min_turns?: Maybe<Scalars['Int']>;
  max_turns?: Maybe<Scalars['Int']>;
  drain?: Maybe<Scalars['Int']>;
  healing?: Maybe<Scalars['Int']>;
  crit_rate: Scalars['Int'];
  ailment_change: Scalars['Int'];
  flinch_change: Scalars['Int'];
  stat_chance: Scalars['Int'];
};

export type MoveStatAffect = {
  __typename?: 'MoveStatAffect';
  change: Scalars['Int'];
  move: Move;
};

export type MoveStatAffectSets = {
  __typename?: 'MoveStatAffectSets';
  increase: Array<MoveStatAffect>;
  decrease: Array<MoveStatAffect>;
};

export type MoveStatChange = {
  __typename?: 'MoveStatChange';
  change: Scalars['Int'];
  stat: Stat;
};

export type MoveTarget = {
  __typename?: 'MoveTarget';
  id: Scalars['Int'];
  name: Scalars['String'];
  descriptions: Array<Description>;
  moves: Array<Move>;
  names: Array<Name>;
};

export type Name = {
  __typename?: 'Name';
  name: Scalars['String'];
  language: Language;
};

export type Nature = {
  __typename?: 'Nature';
  id: Scalars['Int'];
  name: Scalars['String'];
  decreased_stat: Stat;
  increased_stat: Stat;
  hates_flavor: BerryFlavor;
  likes_flavor: BerryFlavor;
  pokeathlon_stat_changes: Array<NatureStatChange>;
  move_battle_style_preferences: Array<MoveBattleStylePreference>;
  names: Array<Name>;
};

export type NaturePokeathlonStatAffect = {
  __typename?: 'NaturePokeathlonStatAffect';
  max_change: Scalars['Int'];
  nature: Nature;
};

export type NaturePokeathlonStatAffectSets = {
  __typename?: 'NaturePokeathlonStatAffectSets';
  increase: Array<NaturePokeathlonStatAffect>;
  decrease: Array<NaturePokeathlonStatAffect>;
};

export type NatureStatAffectSets = {
  __typename?: 'NatureStatAffectSets';
  increase: Array<Nature>;
  decrease: Array<Nature>;
};

export type NatureStatChange = {
  __typename?: 'NatureStatChange';
  max_change: Scalars['Int'];
  pokeathlon_stat: PokeathlonStat;
};

export type PaginationListAbility = {
  __typename?: 'PaginationListAbility';
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  list: Array<Ability>;
};

export type PaginationListPokemon = {
  __typename?: 'PaginationListPokemon';
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  list: Array<Pokemon>;
};

export type PaginationListType = {
  __typename?: 'PaginationListType';
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  list: Array<Type>;
};

export type PalParkArea = {
  __typename?: 'PalParkArea';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  pokemon_encounters: Array<PalParkEncounterSpecies>;
};

export type PalParkEncounterArea = {
  __typename?: 'PalParkEncounterArea';
  base_score: Scalars['Int'];
  rate: Scalars['Int'];
  area: PalParkArea;
};

export type PalParkEncounterSpecies = {
  __typename?: 'PalParkEncounterSpecies';
  base_score: Scalars['Int'];
  rate: Scalars['Int'];
  pokemon_species: PokemonSpecies;
};

export type PastMoveStatValues = {
  __typename?: 'PastMoveStatValues';
  accuracy: Scalars['Int'];
  effect_change: Scalars['Int'];
  power: Scalars['Int'];
  pp: Scalars['Int'];
  effect_entries: VerboseEffect;
  type: Type;
  version_group: VersionGroup;
};

export type PokeathlonStat = {
  __typename?: 'PokeathlonStat';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  affecting_natures: NaturePokeathlonStatAffectSets;
};

export type Pokedex = {
  __typename?: 'Pokedex';
  id: Scalars['Int'];
  name: Scalars['String'];
  is_main_series: Scalars['Boolean'];
  descriptions: Array<Description>;
  names: Array<Name>;
  pokemon_entries: Array<PokemonEntry>;
  region: Region;
  version_groups: Array<VersionGroup>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id: Scalars['Int'];
  name: Scalars['String'];
  base_experience: Scalars['Int'];
  height: Scalars['Int'];
  is_default: Scalars['Boolean'];
  order: Scalars['Int'];
  weight: Scalars['Int'];
  abilities: Array<PokemonAbility>;
  forms: Array<PokemonForm>;
  game_indices: Array<VersionGameIndex>;
  held_items: Array<PokemonHeldItem>;
  location_area_encounters: Scalars['String'];
  moves: Array<PokemonMove>;
  sprites: PokemonSprites;
  species: PokemonSpecies;
  stats: Array<PokemonStat>;
  types: Array<PokemonType>;
};

export type PokemonAbility = {
  __typename?: 'PokemonAbility';
  is_hidden: Scalars['Boolean'];
  slot: Scalars['Int'];
  ability: Ability;
};

export type PokemonColor = {
  __typename?: 'PokemonColor';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  pokemon_species: Array<PokemonSpecies>;
};

export type PokemonEncounter = {
  __typename?: 'PokemonEncounter';
  pokemon: Pokemon;
  version_details?: Maybe<Array<Maybe<VersionEncounterDetail>>>;
};

export type PokemonEntry = {
  __typename?: 'PokemonEntry';
  entry_number: Scalars['Int'];
  pokemon_species: PokemonSpecies;
};

export type PokemonForm = {
  __typename?: 'PokemonForm';
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  form_order: Scalars['Int'];
  is_default: Scalars['Boolean'];
  is_battle_only: Scalars['Boolean'];
  is_mega: Scalars['Boolean'];
  form_name: Scalars['String'];
  pokemon: Pokemon;
  sprites: PokemonFormSprites;
  version_group: VersionGroup;
  names: Array<Name>;
  form_names: Array<Name>;
};

export type PokemonFormSprites = {
  __typename?: 'PokemonFormSprites';
  front_default: Scalars['String'];
  front_shiny: Scalars['String'];
  back_default: Scalars['String'];
  back_shiny: Scalars['String'];
};

export type PokemonHabitat = {
  __typename?: 'PokemonHabitat';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  pokemon_species: Array<PokemonSpecies>;
};

export type PokemonHeldItem = {
  __typename?: 'PokemonHeldItem';
  item: Item;
  version_details: Array<PokemonHeldItemVersion>;
};

export type PokemonHeldItemVersion = {
  __typename?: 'PokemonHeldItemVersion';
  version: Version;
  rarity: Scalars['Int'];
};

export type PokemonMove = {
  __typename?: 'PokemonMove';
  move: Move;
  version_group_details: Array<PokemonMoveVersion>;
};

export type PokemonMoveVersion = {
  __typename?: 'PokemonMoveVersion';
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
  level_learned_at?: Maybe<Scalars['Int']>;
};

export type PokemonShape = {
  __typename?: 'PokemonShape';
  id: Scalars['Int'];
  name: Scalars['String'];
  awesome_names: Array<AwesomeName>;
  names: Array<Name>;
  pokemon_species: Array<PokemonSpecies>;
};

export type PokemonSpecies = {
  __typename?: 'PokemonSpecies';
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  gender_rate: Scalars['Int'];
  capture_rate: Scalars['Int'];
  base_happiness: Scalars['Int'];
  is_baby: Scalars['Boolean'];
  is_legendary: Scalars['Boolean'];
  is_mythical: Scalars['Boolean'];
  hatch_counter: Scalars['Int'];
  has_gender_differences: Scalars['Boolean'];
  forms_switchable: Scalars['Boolean'];
  growth_rate: GrowthRate;
  pokedex_numbers: Array<PokemonSpeciesDexEntry>;
  egg_groups: Array<EggGroup>;
  color: PokemonColor;
  shape: PokemonShape;
  evolves_from_species: PokemonSpecies;
  evolution_chain: EvolutionChain;
  habitat: PokemonHabitat;
  generation: Generation;
  names: Array<Name>;
  pal_park_encounters: Array<PalParkEncounterArea>;
  flavor_text_entries: Array<FlavorText>;
  form_descriptions: Array<Description>;
  genera: Array<Genus>;
  varieties: Array<PokemonSpeciesVariety>;
};

export type PokemonSpeciesDexEntry = {
  __typename?: 'PokemonSpeciesDexEntry';
  entry_number: Scalars['Int'];
  pokedex: Pokedex;
};

export type PokemonSpeciesGender = {
  __typename?: 'PokemonSpeciesGender';
  rate: Scalars['Int'];
  pokemon_species: PokemonSpecies;
};

export type PokemonSpeciesVariety = {
  __typename?: 'PokemonSpeciesVariety';
  is_default: Scalars['Boolean'];
  pokemon: Pokemon;
};

export type PokemonSprites = {
  __typename?: 'PokemonSprites';
  front_default: Scalars['String'];
  front_shiny: Scalars['String'];
  front_female: Scalars['String'];
  front_shiny_female: Scalars['String'];
  back_default: Scalars['String'];
  back_shiny: Scalars['String'];
  back_female: Scalars['String'];
  back_shiny_female: Scalars['String'];
};

export type PokemonStat = {
  __typename?: 'PokemonStat';
  stat: Stat;
  effort: Scalars['Int'];
  base_state: Scalars['Int'];
};

export type PokemonType = {
  __typename?: 'PokemonType';
  slot: Scalars['Int'];
  type: Type;
};

export type Query = {
  __typename?: 'Query';
  abilityList?: Maybe<PaginationListAbility>;
  ability?: Maybe<Ability>;
  pokemonList?: Maybe<PaginationListPokemon>;
  pokemon?: Maybe<Pokemon>;
  typeList?: Maybe<PaginationListType>;
  type?: Maybe<Type>;
};


export type QueryAbilityListArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryAbilityArgs = {
  id: Scalars['Int'];
};


export type QueryPokemonListArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryPokemonArgs = {
  id: Scalars['Int'];
};


export type QueryTypeListArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryTypeArgs = {
  id: Scalars['Int'];
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['Int'];
  name: Scalars['String'];
  locations: Array<Location>;
  names: Array<Name>;
  main_generation: Generation;
  pokedexes: Array<Pokedex>;
  version_groups: Array<VersionGroup>;
};

export type Stat = {
  __typename?: 'Stat';
  id: Scalars['Int'];
  name: Scalars['String'];
  game_index: Scalars['Int'];
  is_battle_only: Scalars['Boolean'];
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: Array<Characteristic>;
  move_damage_class: MoveDamageClass;
  names: Array<Name>;
};

export type SuperContestEffect = {
  __typename?: 'SuperContestEffect';
  id: Scalars['Int'];
  appeal: Scalars['Int'];
  flavor_text_entries: Array<FlavorText>;
  moves: Array<Move>;
};

export type Type = {
  __typename?: 'Type';
  id: Scalars['Int'];
  name: Scalars['String'];
  damage_relations: TypeRelations;
  game_indices: Array<GenerationGameIndex>;
  generation: Generation;
  move_damage_class: MoveDamageClass;
  names: Array<Name>;
  pokemon: Array<TypePokemon>;
  moves: Array<Move>;
};

export type TypePokemon = {
  __typename?: 'TypePokemon';
  slot: Scalars['Int'];
  pokemon: Pokemon;
};

export type TypeRelations = {
  __typename?: 'TypeRelations';
  no_damage_to: Array<Type>;
  half_damage_to: Array<Type>;
  double_damage_to: Array<Type>;
  no_damage_from: Array<Type>;
  half_damage_from: Array<Type>;
  double_damage_from: Array<Type>;
};


export type VerboseEffect = {
  __typename?: 'VerboseEffect';
  effect: Scalars['String'];
  short_effect: Scalars['String'];
  language: Language;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['Int'];
  name: Scalars['String'];
  names: Array<Name>;
  version_group: VersionGroup;
};

export type VersionEncounterDetail = {
  __typename?: 'VersionEncounterDetail';
  version: Version;
  max_change: Scalars['Int'];
  encounter_details: Array<Encounter>;
};

export type VersionGameIndex = {
  __typename?: 'VersionGameIndex';
  game_index: Scalars['Int'];
  version: Version;
};

export type VersionGroup = {
  __typename?: 'VersionGroup';
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  generation: Generation;
  move_learn_methods: Array<MoveLearnMethod>;
  pokedexes: Array<Pokedex>;
  regions: Array<Region>;
  versions: Array<Version>;
};

export type VersionGroupFlavorText = {
  __typename?: 'VersionGroupFlavorText';
  text: Scalars['String'];
  language: Language;
  version_group: VersionGroup;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Ability: ResolverTypeWrapper<Ability>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AbilityEffectChange: ResolverTypeWrapper<AbilityEffectChange>;
  AbilityFlavorText: ResolverTypeWrapper<AbilityFlavorText>;
  AbilityPokemon: ResolverTypeWrapper<AbilityPokemon>;
  AwesomeName: ResolverTypeWrapper<AwesomeName>;
  Berry: ResolverTypeWrapper<Berry>;
  BerryFirmness: ResolverTypeWrapper<BerryFirmness>;
  BerryFlavor: ResolverTypeWrapper<BerryFlavor>;
  BerryFlavorMap: ResolverTypeWrapper<BerryFlavorMap>;
  CacheControlScope: CacheControlScope;
  ChainLink: ResolverTypeWrapper<ChainLink>;
  Characteristic: ResolverTypeWrapper<Characteristic>;
  ContestComboDetail: ResolverTypeWrapper<ContestComboDetail>;
  ContestComboSets: ResolverTypeWrapper<ContestComboSets>;
  ContestEffect: ResolverTypeWrapper<ContestEffect>;
  ContestName: ResolverTypeWrapper<ContestName>;
  ContestType: ResolverTypeWrapper<ContestType>;
  Description: ResolverTypeWrapper<Description>;
  Effect: ResolverTypeWrapper<Effect>;
  EggGroup: ResolverTypeWrapper<EggGroup>;
  Encounter: ResolverTypeWrapper<Encounter>;
  EncounterCondition: ResolverTypeWrapper<EncounterCondition>;
  EncounterConditionValue: ResolverTypeWrapper<EncounterConditionValue>;
  EncounterMethod: ResolverTypeWrapper<EncounterMethod>;
  EncounterMethodRate: ResolverTypeWrapper<EncounterMethodRate>;
  EncounterVersionDetails: ResolverTypeWrapper<EncounterVersionDetails>;
  EvolutionChain: ResolverTypeWrapper<EvolutionChain>;
  EvolutionDetail: ResolverTypeWrapper<EvolutionDetail>;
  EvolutionTrigger: ResolverTypeWrapper<EvolutionTrigger>;
  FlavorBerryMap: ResolverTypeWrapper<FlavorBerryMap>;
  FlavorText: ResolverTypeWrapper<FlavorText>;
  Gender: ResolverTypeWrapper<Gender>;
  Generation: ResolverTypeWrapper<Generation>;
  GenerationGameIndex: ResolverTypeWrapper<GenerationGameIndex>;
  Genus: ResolverTypeWrapper<Genus>;
  GrowthRate: ResolverTypeWrapper<GrowthRate>;
  GrowthRateExperienceLevel: ResolverTypeWrapper<GrowthRateExperienceLevel>;
  Item: ResolverTypeWrapper<Item>;
  ItemAttribute: ResolverTypeWrapper<ItemAttribute>;
  ItemCategory: ResolverTypeWrapper<ItemCategory>;
  ItemFlingEffect: ResolverTypeWrapper<ItemFlingEffect>;
  ItemHolderPokemon: ResolverTypeWrapper<ItemHolderPokemon>;
  ItemHolderPokemonVersionDetail: ResolverTypeWrapper<ItemHolderPokemonVersionDetail>;
  ItemPocket: ResolverTypeWrapper<ItemPocket>;
  ItemSprites: ResolverTypeWrapper<ItemSprites>;
  Language: ResolverTypeWrapper<Language>;
  Location: ResolverTypeWrapper<Location>;
  LocationArea: ResolverTypeWrapper<LocationArea>;
  LocationAreaEncounter: ResolverTypeWrapper<LocationAreaEncounter>;
  Machine: ResolverTypeWrapper<Machine>;
  MachineVersionDetail: ResolverTypeWrapper<MachineVersionDetail>;
  Move: ResolverTypeWrapper<Move>;
  MoveAilment: ResolverTypeWrapper<MoveAilment>;
  MoveBattleStyle: ResolverTypeWrapper<MoveBattleStyle>;
  MoveBattleStylePreference: ResolverTypeWrapper<MoveBattleStylePreference>;
  MoveCategory: ResolverTypeWrapper<MoveCategory>;
  MoveDamageClass: ResolverTypeWrapper<MoveDamageClass>;
  MoveFlavorText: ResolverTypeWrapper<MoveFlavorText>;
  MoveLearnMethod: ResolverTypeWrapper<MoveLearnMethod>;
  MoveMetaData: ResolverTypeWrapper<MoveMetaData>;
  MoveStatAffect: ResolverTypeWrapper<MoveStatAffect>;
  MoveStatAffectSets: ResolverTypeWrapper<MoveStatAffectSets>;
  MoveStatChange: ResolverTypeWrapper<MoveStatChange>;
  MoveTarget: ResolverTypeWrapper<MoveTarget>;
  Name: ResolverTypeWrapper<Name>;
  Nature: ResolverTypeWrapper<Nature>;
  NaturePokeathlonStatAffect: ResolverTypeWrapper<NaturePokeathlonStatAffect>;
  NaturePokeathlonStatAffectSets: ResolverTypeWrapper<NaturePokeathlonStatAffectSets>;
  NatureStatAffectSets: ResolverTypeWrapper<NatureStatAffectSets>;
  NatureStatChange: ResolverTypeWrapper<NatureStatChange>;
  PaginationListAbility: ResolverTypeWrapper<PaginationListAbility>;
  PaginationListPokemon: ResolverTypeWrapper<PaginationListPokemon>;
  PaginationListType: ResolverTypeWrapper<PaginationListType>;
  PalParkArea: ResolverTypeWrapper<PalParkArea>;
  PalParkEncounterArea: ResolverTypeWrapper<PalParkEncounterArea>;
  PalParkEncounterSpecies: ResolverTypeWrapper<PalParkEncounterSpecies>;
  PastMoveStatValues: ResolverTypeWrapper<PastMoveStatValues>;
  PokeathlonStat: ResolverTypeWrapper<PokeathlonStat>;
  Pokedex: ResolverTypeWrapper<Pokedex>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonAbility: ResolverTypeWrapper<PokemonAbility>;
  PokemonColor: ResolverTypeWrapper<PokemonColor>;
  PokemonEncounter: ResolverTypeWrapper<PokemonEncounter>;
  PokemonEntry: ResolverTypeWrapper<PokemonEntry>;
  PokemonForm: ResolverTypeWrapper<PokemonForm>;
  PokemonFormSprites: ResolverTypeWrapper<PokemonFormSprites>;
  PokemonHabitat: ResolverTypeWrapper<PokemonHabitat>;
  PokemonHeldItem: ResolverTypeWrapper<PokemonHeldItem>;
  PokemonHeldItemVersion: ResolverTypeWrapper<PokemonHeldItemVersion>;
  PokemonMove: ResolverTypeWrapper<PokemonMove>;
  PokemonMoveVersion: ResolverTypeWrapper<PokemonMoveVersion>;
  PokemonShape: ResolverTypeWrapper<PokemonShape>;
  PokemonSpecies: ResolverTypeWrapper<PokemonSpecies>;
  PokemonSpeciesDexEntry: ResolverTypeWrapper<PokemonSpeciesDexEntry>;
  PokemonSpeciesGender: ResolverTypeWrapper<PokemonSpeciesGender>;
  PokemonSpeciesVariety: ResolverTypeWrapper<PokemonSpeciesVariety>;
  PokemonSprites: ResolverTypeWrapper<PokemonSprites>;
  PokemonStat: ResolverTypeWrapper<PokemonStat>;
  PokemonType: ResolverTypeWrapper<PokemonType>;
  Query: ResolverTypeWrapper<{}>;
  Region: ResolverTypeWrapper<Region>;
  Stat: ResolverTypeWrapper<Stat>;
  SuperContestEffect: ResolverTypeWrapper<SuperContestEffect>;
  Type: ResolverTypeWrapper<Type>;
  TypePokemon: ResolverTypeWrapper<TypePokemon>;
  TypeRelations: ResolverTypeWrapper<TypeRelations>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  VerboseEffect: ResolverTypeWrapper<VerboseEffect>;
  Version: ResolverTypeWrapper<Version>;
  VersionEncounterDetail: ResolverTypeWrapper<VersionEncounterDetail>;
  VersionGameIndex: ResolverTypeWrapper<VersionGameIndex>;
  VersionGroup: ResolverTypeWrapper<VersionGroup>;
  VersionGroupFlavorText: ResolverTypeWrapper<VersionGroupFlavorText>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Ability: Ability;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  AbilityEffectChange: AbilityEffectChange;
  AbilityFlavorText: AbilityFlavorText;
  AbilityPokemon: AbilityPokemon;
  AwesomeName: AwesomeName;
  Berry: Berry;
  BerryFirmness: BerryFirmness;
  BerryFlavor: BerryFlavor;
  BerryFlavorMap: BerryFlavorMap;
  ChainLink: ChainLink;
  Characteristic: Characteristic;
  ContestComboDetail: ContestComboDetail;
  ContestComboSets: ContestComboSets;
  ContestEffect: ContestEffect;
  ContestName: ContestName;
  ContestType: ContestType;
  Description: Description;
  Effect: Effect;
  EggGroup: EggGroup;
  Encounter: Encounter;
  EncounterCondition: EncounterCondition;
  EncounterConditionValue: EncounterConditionValue;
  EncounterMethod: EncounterMethod;
  EncounterMethodRate: EncounterMethodRate;
  EncounterVersionDetails: EncounterVersionDetails;
  EvolutionChain: EvolutionChain;
  EvolutionDetail: EvolutionDetail;
  EvolutionTrigger: EvolutionTrigger;
  FlavorBerryMap: FlavorBerryMap;
  FlavorText: FlavorText;
  Gender: Gender;
  Generation: Generation;
  GenerationGameIndex: GenerationGameIndex;
  Genus: Genus;
  GrowthRate: GrowthRate;
  GrowthRateExperienceLevel: GrowthRateExperienceLevel;
  Item: Item;
  ItemAttribute: ItemAttribute;
  ItemCategory: ItemCategory;
  ItemFlingEffect: ItemFlingEffect;
  ItemHolderPokemon: ItemHolderPokemon;
  ItemHolderPokemonVersionDetail: ItemHolderPokemonVersionDetail;
  ItemPocket: ItemPocket;
  ItemSprites: ItemSprites;
  Language: Language;
  Location: Location;
  LocationArea: LocationArea;
  LocationAreaEncounter: LocationAreaEncounter;
  Machine: Machine;
  MachineVersionDetail: MachineVersionDetail;
  Move: Move;
  MoveAilment: MoveAilment;
  MoveBattleStyle: MoveBattleStyle;
  MoveBattleStylePreference: MoveBattleStylePreference;
  MoveCategory: MoveCategory;
  MoveDamageClass: MoveDamageClass;
  MoveFlavorText: MoveFlavorText;
  MoveLearnMethod: MoveLearnMethod;
  MoveMetaData: MoveMetaData;
  MoveStatAffect: MoveStatAffect;
  MoveStatAffectSets: MoveStatAffectSets;
  MoveStatChange: MoveStatChange;
  MoveTarget: MoveTarget;
  Name: Name;
  Nature: Nature;
  NaturePokeathlonStatAffect: NaturePokeathlonStatAffect;
  NaturePokeathlonStatAffectSets: NaturePokeathlonStatAffectSets;
  NatureStatAffectSets: NatureStatAffectSets;
  NatureStatChange: NatureStatChange;
  PaginationListAbility: PaginationListAbility;
  PaginationListPokemon: PaginationListPokemon;
  PaginationListType: PaginationListType;
  PalParkArea: PalParkArea;
  PalParkEncounterArea: PalParkEncounterArea;
  PalParkEncounterSpecies: PalParkEncounterSpecies;
  PastMoveStatValues: PastMoveStatValues;
  PokeathlonStat: PokeathlonStat;
  Pokedex: Pokedex;
  Pokemon: Pokemon;
  PokemonAbility: PokemonAbility;
  PokemonColor: PokemonColor;
  PokemonEncounter: PokemonEncounter;
  PokemonEntry: PokemonEntry;
  PokemonForm: PokemonForm;
  PokemonFormSprites: PokemonFormSprites;
  PokemonHabitat: PokemonHabitat;
  PokemonHeldItem: PokemonHeldItem;
  PokemonHeldItemVersion: PokemonHeldItemVersion;
  PokemonMove: PokemonMove;
  PokemonMoveVersion: PokemonMoveVersion;
  PokemonShape: PokemonShape;
  PokemonSpecies: PokemonSpecies;
  PokemonSpeciesDexEntry: PokemonSpeciesDexEntry;
  PokemonSpeciesGender: PokemonSpeciesGender;
  PokemonSpeciesVariety: PokemonSpeciesVariety;
  PokemonSprites: PokemonSprites;
  PokemonStat: PokemonStat;
  PokemonType: PokemonType;
  Query: {};
  Region: Region;
  Stat: Stat;
  SuperContestEffect: SuperContestEffect;
  Type: Type;
  TypePokemon: TypePokemon;
  TypeRelations: TypeRelations;
  Upload: Scalars['Upload'];
  VerboseEffect: VerboseEffect;
  Version: Version;
  VersionEncounterDetail: VersionEncounterDetail;
  VersionGameIndex: VersionGameIndex;
  VersionGroup: VersionGroup;
  VersionGroupFlavorText: VersionGroupFlavorText;
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_main_series?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  effect_entries?: Resolver<Array<ResolversTypes['VerboseEffect']>, ParentType, ContextType>;
  effect_changes?: Resolver<Array<ResolversTypes['AbilityEffectChange']>, ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['AbilityFlavorText']>, ParentType, ContextType>;
  pokemon?: Resolver<Array<ResolversTypes['AbilityPokemon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityEffectChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityEffectChange'] = ResolversParentTypes['AbilityEffectChange']> = {
  effect_entries?: Resolver<Array<ResolversTypes['Effect']>, ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityFlavorTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityFlavorText'] = ResolversParentTypes['AbilityFlavorText']> = {
  flavor_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityPokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityPokemon'] = ResolversParentTypes['AbilityPokemon']> = {
  is_hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwesomeNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwesomeName'] = ResolversParentTypes['AwesomeName']> = {
  awesome_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BerryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Berry'] = ResolversParentTypes['Berry']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  growth_time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  max_harvest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  natural_gift_power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  smoothness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soil_dryness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firmness?: Resolver<ResolversTypes['BerryFirmness'], ParentType, ContextType>;
  flavors?: Resolver<Array<ResolversTypes['BerryFlavorMap']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  natural_gift_type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BerryFirmnessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BerryFirmness'] = ResolversParentTypes['BerryFirmness']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  berries?: Resolver<Array<ResolversTypes['Berry']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BerryFlavorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BerryFlavor'] = ResolversParentTypes['BerryFlavor']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  berries?: Resolver<Array<ResolversTypes['BerryFlavorMap']>, ParentType, ContextType>;
  contest_type?: Resolver<ResolversTypes['ContestType'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BerryFlavorMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['BerryFlavorMap'] = ResolversParentTypes['BerryFlavorMap']> = {
  potency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flavor?: Resolver<ResolversTypes['BerryFlavor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChainLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChainLink'] = ResolversParentTypes['ChainLink']> = {
  is_baby?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  evolution_details?: Resolver<Maybe<Array<Maybe<ResolversTypes['EvolutionDetail']>>>, ParentType, ContextType>;
  evolves_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChainLink']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacteristicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Characteristic'] = ResolversParentTypes['Characteristic']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gene_modulo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  possible_values?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  highest_stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestComboDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestComboDetail'] = ResolversParentTypes['ContestComboDetail']> = {
  use_before?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  use_after?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestComboSetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestComboSets'] = ResolversParentTypes['ContestComboSets']> = {
  normal?: Resolver<ResolversTypes['ContestComboDetail'], ParentType, ContextType>;
  super?: Resolver<ResolversTypes['ContestComboDetail'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestEffect'] = ResolversParentTypes['ContestEffect']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  appeal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jam?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  effect_entries?: Resolver<Array<ResolversTypes['Effect']>, ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['FlavorText']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestName'] = ResolversParentTypes['ContestName']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestType'] = ResolversParentTypes['ContestType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  berry_flavor?: Resolver<ResolversTypes['BerryFlavor'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['ContestName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Description'] = ResolversParentTypes['Description']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Effect'] = ResolversParentTypes['Effect']> = {
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EggGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['EggGroup'] = ResolversParentTypes['EggGroup']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Encounter'] = ResolversParentTypes['Encounter']> = {
  min_level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  max_level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  condition_values?: Resolver<Array<ResolversTypes['EncounterConditionValue']>, ParentType, ContextType>;
  change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['EncounterMethod'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterConditionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncounterCondition'] = ResolversParentTypes['EncounterCondition']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['EncounterConditionValue']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterConditionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncounterConditionValue'] = ResolversParentTypes['EncounterConditionValue']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  condition?: Resolver<ResolversTypes['EncounterCondition'], ParentType, ContextType>;
  names?: Resolver<Maybe<Array<Maybe<ResolversTypes['Name']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncounterMethod'] = ResolversParentTypes['EncounterMethod']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterMethodRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncounterMethodRate'] = ResolversParentTypes['EncounterMethodRate']> = {
  encounter_method?: Resolver<ResolversTypes['EncounterMethod'], ParentType, ContextType>;
  version_details?: Resolver<Array<ResolversTypes['EncounterVersionDetails']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncounterVersionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncounterVersionDetails'] = ResolversParentTypes['EncounterVersionDetails']> = {
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvolutionChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvolutionChain'] = ResolversParentTypes['EvolutionChain']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  baby_trigger_item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['ChainLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvolutionDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvolutionDetail'] = ResolversParentTypes['EvolutionDetail']> = {
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trigger?: Resolver<Maybe<ResolversTypes['EvolutionTrigger']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  held_item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  known_move?: Resolver<Maybe<ResolversTypes['Move']>, ParentType, ContextType>;
  known_move_type?: Resolver<Maybe<ResolversTypes['Type']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  min_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_happiness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_beauty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_affection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  needs_overworld_rain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  party_species?: Resolver<Maybe<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  party_type?: Resolver<Maybe<ResolversTypes['Type']>, ParentType, ContextType>;
  relative_physical_stats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time_of_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trade_species?: Resolver<Maybe<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  turn_upside_down?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvolutionTriggerResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvolutionTrigger'] = ResolversParentTypes['EvolutionTrigger']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlavorBerryMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlavorBerryMap'] = ResolversParentTypes['FlavorBerryMap']> = {
  potency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  berry?: Resolver<ResolversTypes['Berry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlavorTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlavorText'] = ResolversParentTypes['FlavorText']> = {
  flavor_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pokemon_species_details?: Resolver<Array<ResolversTypes['PokemonSpeciesGender']>, ParentType, ContextType>;
  required_for_evolution?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Generation'] = ResolversParentTypes['Generation']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abilities?: Resolver<Array<ResolversTypes['Ability']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  main_region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  version_groups?: Resolver<Array<ResolversTypes['VersionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerationGameIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenerationGameIndex'] = ResolversParentTypes['GenerationGameIndex']> = {
  game_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genus'] = ResolversParentTypes['Genus']> = {
  genus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrowthRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrowthRate'] = ResolversParentTypes['GrowthRate']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formula?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  levels?: Resolver<Array<ResolversTypes['GrowthRateExperienceLevel']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrowthRateExperienceLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrowthRateExperienceLevel'] = ResolversParentTypes['GrowthRateExperienceLevel']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  experience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fling_power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fling_effect?: Resolver<ResolversTypes['ItemFlingEffect'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['ItemAttribute']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['ItemCategory'], ParentType, ContextType>;
  effect_entries?: Resolver<Array<ResolversTypes['VerboseEffect']>, ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['VersionGroupFlavorText']>, ParentType, ContextType>;
  game_indices?: Resolver<Array<ResolversTypes['GenerationGameIndex']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['ItemSprites'], ParentType, ContextType>;
  held_by_pokemon?: Resolver<Array<ResolversTypes['ItemHolderPokemon']>, ParentType, ContextType>;
  baby_trigger_for?: Resolver<ResolversTypes['EvolutionChain'], ParentType, ContextType>;
  machines?: Resolver<Array<ResolversTypes['MachineVersionDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemAttribute'] = ResolversParentTypes['ItemAttribute']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemCategory'] = ResolversParentTypes['ItemCategory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pocket?: Resolver<ResolversTypes['ItemPocket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemFlingEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemFlingEffect'] = ResolversParentTypes['ItemFlingEffect']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effect_entries?: Resolver<Array<ResolversTypes['Effect']>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemHolderPokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemHolderPokemon'] = ResolversParentTypes['ItemHolderPokemon']> = {
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  version_details?: Resolver<Array<ResolversTypes['ItemHolderPokemonVersionDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemHolderPokemonVersionDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemHolderPokemonVersionDetail'] = ResolversParentTypes['ItemHolderPokemonVersionDetail']> = {
  rarity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPocket'] = ResolversParentTypes['ItemPocket']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['ItemCategory']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSpritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemSprites'] = ResolversParentTypes['ItemSprites']> = {
  default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  official?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  iso639?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iso3166?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  game_indices?: Resolver<Array<ResolversTypes['GenerationGameIndex']>, ParentType, ContextType>;
  areas?: Resolver<Array<ResolversTypes['LocationArea']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationArea'] = ResolversParentTypes['LocationArea']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  game_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  encounter_method_rates?: Resolver<Array<ResolversTypes['EncounterMethodRate']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_encounters?: Resolver<Array<ResolversTypes['PokemonEncounter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationAreaEncounterResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationAreaEncounter'] = ResolversParentTypes['LocationAreaEncounter']> = {
  location_area?: Resolver<ResolversTypes['LocationArea'], ParentType, ContextType>;
  version_details?: Resolver<Array<ResolversTypes['VersionEncounterDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MachineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Machine'] = ResolversParentTypes['Machine']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  move?: Resolver<ResolversTypes['Move'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MachineVersionDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['MachineVersionDetail'] = ResolversParentTypes['MachineVersionDetail']> = {
  machine?: Resolver<ResolversTypes['Machine'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Move'] = ResolversParentTypes['Move']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  effect_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contest_combos?: Resolver<ResolversTypes['ContestComboSets'], ParentType, ContextType>;
  contest_type?: Resolver<ResolversTypes['ContestType'], ParentType, ContextType>;
  contest_effect?: Resolver<ResolversTypes['ContestEffect'], ParentType, ContextType>;
  damage_class?: Resolver<ResolversTypes['MoveDamageClass'], ParentType, ContextType>;
  effect_entries?: Resolver<Array<ResolversTypes['VerboseEffect']>, ParentType, ContextType>;
  effect_changes?: Resolver<Array<ResolversTypes['AbilityEffectChange']>, ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['MoveFlavorText']>, ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  machines?: Resolver<Array<ResolversTypes['MachineVersionDetail']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['MoveMetaData'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  past_values?: Resolver<Array<ResolversTypes['PastMoveStatValues']>, ParentType, ContextType>;
  stat_changes?: Resolver<Array<ResolversTypes['MoveStatChange']>, ParentType, ContextType>;
  super_contest_effect?: Resolver<ResolversTypes['SuperContestEffect'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['MoveTarget'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveAilmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveAilment'] = ResolversParentTypes['MoveAilment']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveBattleStyleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveBattleStyle'] = ResolversParentTypes['MoveBattleStyle']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveBattleStylePreferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveBattleStylePreference'] = ResolversParentTypes['MoveBattleStylePreference']> = {
  low_hp_preference?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  high_hp_preference?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  move_battle_style?: Resolver<ResolversTypes['MoveBattleStyle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveCategory'] = ResolversParentTypes['MoveCategory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveDamageClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveDamageClass'] = ResolversParentTypes['MoveDamageClass']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveFlavorTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveFlavorText'] = ResolversParentTypes['MoveFlavorText']> = {
  flavor_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveLearnMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveLearnMethod'] = ResolversParentTypes['MoveLearnMethod']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  version_groups?: Resolver<Array<ResolversTypes['VersionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveMetaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveMetaData'] = ResolversParentTypes['MoveMetaData']> = {
  ailment?: Resolver<ResolversTypes['MoveAilment'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['MoveCategory'], ParentType, ContextType>;
  min_hits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_hits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_turns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_turns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  drain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  healing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  crit_rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ailment_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flinch_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat_chance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveStatAffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveStatAffect'] = ResolversParentTypes['MoveStatAffect']> = {
  change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  move?: Resolver<ResolversTypes['Move'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveStatAffectSetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveStatAffectSets'] = ResolversParentTypes['MoveStatAffectSets']> = {
  increase?: Resolver<Array<ResolversTypes['MoveStatAffect']>, ParentType, ContextType>;
  decrease?: Resolver<Array<ResolversTypes['MoveStatAffect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveStatChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveStatChange'] = ResolversParentTypes['MoveStatChange']> = {
  change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveTarget'] = ResolversParentTypes['MoveTarget']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nature'] = ResolversParentTypes['Nature']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decreased_stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  increased_stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  hates_flavor?: Resolver<ResolversTypes['BerryFlavor'], ParentType, ContextType>;
  likes_flavor?: Resolver<ResolversTypes['BerryFlavor'], ParentType, ContextType>;
  pokeathlon_stat_changes?: Resolver<Array<ResolversTypes['NatureStatChange']>, ParentType, ContextType>;
  move_battle_style_preferences?: Resolver<Array<ResolversTypes['MoveBattleStylePreference']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NaturePokeathlonStatAffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['NaturePokeathlonStatAffect'] = ResolversParentTypes['NaturePokeathlonStatAffect']> = {
  max_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nature?: Resolver<ResolversTypes['Nature'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NaturePokeathlonStatAffectSetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NaturePokeathlonStatAffectSets'] = ResolversParentTypes['NaturePokeathlonStatAffectSets']> = {
  increase?: Resolver<Array<ResolversTypes['NaturePokeathlonStatAffect']>, ParentType, ContextType>;
  decrease?: Resolver<Array<ResolversTypes['NaturePokeathlonStatAffect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NatureStatAffectSetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NatureStatAffectSets'] = ResolversParentTypes['NatureStatAffectSets']> = {
  increase?: Resolver<Array<ResolversTypes['Nature']>, ParentType, ContextType>;
  decrease?: Resolver<Array<ResolversTypes['Nature']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NatureStatChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NatureStatChange'] = ResolversParentTypes['NatureStatChange']> = {
  max_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokeathlon_stat?: Resolver<ResolversTypes['PokeathlonStat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationListAbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationListAbility'] = ResolversParentTypes['PaginationListAbility']> = {
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Ability']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationListPokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationListPokemon'] = ResolversParentTypes['PaginationListPokemon']> = {
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Pokemon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationListType'] = ResolversParentTypes['PaginationListType']> = {
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalParkAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['PalParkArea'] = ResolversParentTypes['PalParkArea']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_encounters?: Resolver<Array<ResolversTypes['PalParkEncounterSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalParkEncounterAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['PalParkEncounterArea'] = ResolversParentTypes['PalParkEncounterArea']> = {
  base_score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  area?: Resolver<ResolversTypes['PalParkArea'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalParkEncounterSpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PalParkEncounterSpecies'] = ResolversParentTypes['PalParkEncounterSpecies']> = {
  base_score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokemon_species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PastMoveStatValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PastMoveStatValues'] = ResolversParentTypes['PastMoveStatValues']> = {
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  effect_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  effect_entries?: Resolver<ResolversTypes['VerboseEffect'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokeathlonStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokeathlonStat'] = ResolversParentTypes['PokeathlonStat']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  affecting_natures?: Resolver<ResolversTypes['NaturePokeathlonStatAffectSets'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokedexResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokedex'] = ResolversParentTypes['Pokedex']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_main_series?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_entries?: Resolver<Array<ResolversTypes['PokemonEntry']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  version_groups?: Resolver<Array<ResolversTypes['VersionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base_experience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abilities?: Resolver<Array<ResolversTypes['PokemonAbility']>, ParentType, ContextType>;
  forms?: Resolver<Array<ResolversTypes['PokemonForm']>, ParentType, ContextType>;
  game_indices?: Resolver<Array<ResolversTypes['VersionGameIndex']>, ParentType, ContextType>;
  held_items?: Resolver<Array<ResolversTypes['PokemonHeldItem']>, ParentType, ContextType>;
  location_area_encounters?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['PokemonMove']>, ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['PokemonSprites'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  stats?: Resolver<Array<ResolversTypes['PokemonStat']>, ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['PokemonType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonAbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonAbility'] = ResolversParentTypes['PokemonAbility']> = {
  is_hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ability?: Resolver<ResolversTypes['Ability'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonColor'] = ResolversParentTypes['PokemonColor']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonEncounterResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonEncounter'] = ResolversParentTypes['PokemonEncounter']> = {
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  version_details?: Resolver<Maybe<Array<Maybe<ResolversTypes['VersionEncounterDetail']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonEntry'] = ResolversParentTypes['PokemonEntry']> = {
  entry_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokemon_species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonFormResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonForm'] = ResolversParentTypes['PokemonForm']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  form_order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_battle_only?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_mega?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  form_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['PokemonFormSprites'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  form_names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonFormSpritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonFormSprites'] = ResolversParentTypes['PokemonFormSprites']> = {
  front_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonHabitatResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonHabitat'] = ResolversParentTypes['PokemonHabitat']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonHeldItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonHeldItem'] = ResolversParentTypes['PokemonHeldItem']> = {
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  version_details?: Resolver<Array<ResolversTypes['PokemonHeldItemVersion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonHeldItemVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonHeldItemVersion'] = ResolversParentTypes['PokemonHeldItemVersion']> = {
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonMoveResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonMove'] = ResolversParentTypes['PokemonMove']> = {
  move?: Resolver<ResolversTypes['Move'], ParentType, ContextType>;
  version_group_details?: Resolver<Array<ResolversTypes['PokemonMoveVersion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonMoveVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonMoveVersion'] = ResolversParentTypes['PokemonMoveVersion']> = {
  move_learn_method?: Resolver<ResolversTypes['MoveLearnMethod'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  level_learned_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonShapeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonShape'] = ResolversParentTypes['PokemonShape']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  awesome_names?: Resolver<Array<ResolversTypes['AwesomeName']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonSpecies'] = ResolversParentTypes['PokemonSpecies']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gender_rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  capture_rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  base_happiness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_baby?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_legendary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_mythical?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hatch_counter?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  has_gender_differences?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  forms_switchable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  growth_rate?: Resolver<ResolversTypes['GrowthRate'], ParentType, ContextType>;
  pokedex_numbers?: Resolver<Array<ResolversTypes['PokemonSpeciesDexEntry']>, ParentType, ContextType>;
  egg_groups?: Resolver<Array<ResolversTypes['EggGroup']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['PokemonColor'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['PokemonShape'], ParentType, ContextType>;
  evolves_from_species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  evolution_chain?: Resolver<ResolversTypes['EvolutionChain'], ParentType, ContextType>;
  habitat?: Resolver<ResolversTypes['PokemonHabitat'], ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pal_park_encounters?: Resolver<Array<ResolversTypes['PalParkEncounterArea']>, ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['FlavorText']>, ParentType, ContextType>;
  form_descriptions?: Resolver<Array<ResolversTypes['Description']>, ParentType, ContextType>;
  genera?: Resolver<Array<ResolversTypes['Genus']>, ParentType, ContextType>;
  varieties?: Resolver<Array<ResolversTypes['PokemonSpeciesVariety']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpeciesDexEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonSpeciesDexEntry'] = ResolversParentTypes['PokemonSpeciesDexEntry']> = {
  entry_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokedex?: Resolver<ResolversTypes['Pokedex'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpeciesGenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonSpeciesGender'] = ResolversParentTypes['PokemonSpeciesGender']> = {
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokemon_species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpeciesVarietyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonSpeciesVariety'] = ResolversParentTypes['PokemonSpeciesVariety']> = {
  is_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonSprites'] = ResolversParentTypes['PokemonSprites']> = {
  front_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_shiny_female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_shiny_female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonStat'] = ResolversParentTypes['PokemonStat']> = {
  stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  effort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  base_state?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonType'] = ResolversParentTypes['PokemonType']> = {
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  abilityList?: Resolver<Maybe<ResolversTypes['PaginationListAbility']>, ParentType, ContextType, RequireFields<QueryAbilityListArgs, 'limit' | 'offset'>>;
  ability?: Resolver<Maybe<ResolversTypes['Ability']>, ParentType, ContextType, RequireFields<QueryAbilityArgs, 'id'>>;
  pokemonList?: Resolver<Maybe<ResolversTypes['PaginationListPokemon']>, ParentType, ContextType, RequireFields<QueryPokemonListArgs, 'limit' | 'offset'>>;
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryPokemonArgs, 'id'>>;
  typeList?: Resolver<Maybe<ResolversTypes['PaginationListType']>, ParentType, ContextType, RequireFields<QueryTypeListArgs, 'limit' | 'offset'>>;
  type?: Resolver<Maybe<ResolversTypes['Type']>, ParentType, ContextType, RequireFields<QueryTypeArgs, 'id'>>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locations?: Resolver<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  main_generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  pokedexes?: Resolver<Array<ResolversTypes['Pokedex']>, ParentType, ContextType>;
  version_groups?: Resolver<Array<ResolversTypes['VersionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stat'] = ResolversParentTypes['Stat']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  game_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_battle_only?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  affecting_moves?: Resolver<ResolversTypes['MoveStatAffectSets'], ParentType, ContextType>;
  affecting_natures?: Resolver<ResolversTypes['NatureStatAffectSets'], ParentType, ContextType>;
  characteristics?: Resolver<Array<ResolversTypes['Characteristic']>, ParentType, ContextType>;
  move_damage_class?: Resolver<ResolversTypes['MoveDamageClass'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuperContestEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuperContestEffect'] = ResolversParentTypes['SuperContestEffect']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  appeal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flavor_text_entries?: Resolver<Array<ResolversTypes['FlavorText']>, ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  damage_relations?: Resolver<ResolversTypes['TypeRelations'], ParentType, ContextType>;
  game_indices?: Resolver<Array<ResolversTypes['GenerationGameIndex']>, ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  move_damage_class?: Resolver<ResolversTypes['MoveDamageClass'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  pokemon?: Resolver<Array<ResolversTypes['TypePokemon']>, ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypePokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypePokemon'] = ResolversParentTypes['TypePokemon']> = {
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pokemon?: Resolver<ResolversTypes['Pokemon'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeRelationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypeRelations'] = ResolversParentTypes['TypeRelations']> = {
  no_damage_to?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  half_damage_to?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  double_damage_to?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  no_damage_from?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  half_damage_from?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  double_damage_from?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type VerboseEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerboseEffect'] = ResolversParentTypes['VerboseEffect']> = {
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  short_effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionEncounterDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionEncounterDetail'] = ResolversParentTypes['VersionEncounterDetail']> = {
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  max_change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  encounter_details?: Resolver<Array<ResolversTypes['Encounter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionGameIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionGameIndex'] = ResolversParentTypes['VersionGameIndex']> = {
  game_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionGroup'] = ResolversParentTypes['VersionGroup']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  generation?: Resolver<ResolversTypes['Generation'], ParentType, ContextType>;
  move_learn_methods?: Resolver<Array<ResolversTypes['MoveLearnMethod']>, ParentType, ContextType>;
  pokedexes?: Resolver<Array<ResolversTypes['Pokedex']>, ParentType, ContextType>;
  regions?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  versions?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionGroupFlavorTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionGroupFlavorText'] = ResolversParentTypes['VersionGroupFlavorText']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  version_group?: Resolver<ResolversTypes['VersionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Ability?: AbilityResolvers<ContextType>;
  AbilityEffectChange?: AbilityEffectChangeResolvers<ContextType>;
  AbilityFlavorText?: AbilityFlavorTextResolvers<ContextType>;
  AbilityPokemon?: AbilityPokemonResolvers<ContextType>;
  AwesomeName?: AwesomeNameResolvers<ContextType>;
  Berry?: BerryResolvers<ContextType>;
  BerryFirmness?: BerryFirmnessResolvers<ContextType>;
  BerryFlavor?: BerryFlavorResolvers<ContextType>;
  BerryFlavorMap?: BerryFlavorMapResolvers<ContextType>;
  ChainLink?: ChainLinkResolvers<ContextType>;
  Characteristic?: CharacteristicResolvers<ContextType>;
  ContestComboDetail?: ContestComboDetailResolvers<ContextType>;
  ContestComboSets?: ContestComboSetsResolvers<ContextType>;
  ContestEffect?: ContestEffectResolvers<ContextType>;
  ContestName?: ContestNameResolvers<ContextType>;
  ContestType?: ContestTypeResolvers<ContextType>;
  Description?: DescriptionResolvers<ContextType>;
  Effect?: EffectResolvers<ContextType>;
  EggGroup?: EggGroupResolvers<ContextType>;
  Encounter?: EncounterResolvers<ContextType>;
  EncounterCondition?: EncounterConditionResolvers<ContextType>;
  EncounterConditionValue?: EncounterConditionValueResolvers<ContextType>;
  EncounterMethod?: EncounterMethodResolvers<ContextType>;
  EncounterMethodRate?: EncounterMethodRateResolvers<ContextType>;
  EncounterVersionDetails?: EncounterVersionDetailsResolvers<ContextType>;
  EvolutionChain?: EvolutionChainResolvers<ContextType>;
  EvolutionDetail?: EvolutionDetailResolvers<ContextType>;
  EvolutionTrigger?: EvolutionTriggerResolvers<ContextType>;
  FlavorBerryMap?: FlavorBerryMapResolvers<ContextType>;
  FlavorText?: FlavorTextResolvers<ContextType>;
  Gender?: GenderResolvers<ContextType>;
  Generation?: GenerationResolvers<ContextType>;
  GenerationGameIndex?: GenerationGameIndexResolvers<ContextType>;
  Genus?: GenusResolvers<ContextType>;
  GrowthRate?: GrowthRateResolvers<ContextType>;
  GrowthRateExperienceLevel?: GrowthRateExperienceLevelResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemAttribute?: ItemAttributeResolvers<ContextType>;
  ItemCategory?: ItemCategoryResolvers<ContextType>;
  ItemFlingEffect?: ItemFlingEffectResolvers<ContextType>;
  ItemHolderPokemon?: ItemHolderPokemonResolvers<ContextType>;
  ItemHolderPokemonVersionDetail?: ItemHolderPokemonVersionDetailResolvers<ContextType>;
  ItemPocket?: ItemPocketResolvers<ContextType>;
  ItemSprites?: ItemSpritesResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationArea?: LocationAreaResolvers<ContextType>;
  LocationAreaEncounter?: LocationAreaEncounterResolvers<ContextType>;
  Machine?: MachineResolvers<ContextType>;
  MachineVersionDetail?: MachineVersionDetailResolvers<ContextType>;
  Move?: MoveResolvers<ContextType>;
  MoveAilment?: MoveAilmentResolvers<ContextType>;
  MoveBattleStyle?: MoveBattleStyleResolvers<ContextType>;
  MoveBattleStylePreference?: MoveBattleStylePreferenceResolvers<ContextType>;
  MoveCategory?: MoveCategoryResolvers<ContextType>;
  MoveDamageClass?: MoveDamageClassResolvers<ContextType>;
  MoveFlavorText?: MoveFlavorTextResolvers<ContextType>;
  MoveLearnMethod?: MoveLearnMethodResolvers<ContextType>;
  MoveMetaData?: MoveMetaDataResolvers<ContextType>;
  MoveStatAffect?: MoveStatAffectResolvers<ContextType>;
  MoveStatAffectSets?: MoveStatAffectSetsResolvers<ContextType>;
  MoveStatChange?: MoveStatChangeResolvers<ContextType>;
  MoveTarget?: MoveTargetResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  Nature?: NatureResolvers<ContextType>;
  NaturePokeathlonStatAffect?: NaturePokeathlonStatAffectResolvers<ContextType>;
  NaturePokeathlonStatAffectSets?: NaturePokeathlonStatAffectSetsResolvers<ContextType>;
  NatureStatAffectSets?: NatureStatAffectSetsResolvers<ContextType>;
  NatureStatChange?: NatureStatChangeResolvers<ContextType>;
  PaginationListAbility?: PaginationListAbilityResolvers<ContextType>;
  PaginationListPokemon?: PaginationListPokemonResolvers<ContextType>;
  PaginationListType?: PaginationListTypeResolvers<ContextType>;
  PalParkArea?: PalParkAreaResolvers<ContextType>;
  PalParkEncounterArea?: PalParkEncounterAreaResolvers<ContextType>;
  PalParkEncounterSpecies?: PalParkEncounterSpeciesResolvers<ContextType>;
  PastMoveStatValues?: PastMoveStatValuesResolvers<ContextType>;
  PokeathlonStat?: PokeathlonStatResolvers<ContextType>;
  Pokedex?: PokedexResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonAbility?: PokemonAbilityResolvers<ContextType>;
  PokemonColor?: PokemonColorResolvers<ContextType>;
  PokemonEncounter?: PokemonEncounterResolvers<ContextType>;
  PokemonEntry?: PokemonEntryResolvers<ContextType>;
  PokemonForm?: PokemonFormResolvers<ContextType>;
  PokemonFormSprites?: PokemonFormSpritesResolvers<ContextType>;
  PokemonHabitat?: PokemonHabitatResolvers<ContextType>;
  PokemonHeldItem?: PokemonHeldItemResolvers<ContextType>;
  PokemonHeldItemVersion?: PokemonHeldItemVersionResolvers<ContextType>;
  PokemonMove?: PokemonMoveResolvers<ContextType>;
  PokemonMoveVersion?: PokemonMoveVersionResolvers<ContextType>;
  PokemonShape?: PokemonShapeResolvers<ContextType>;
  PokemonSpecies?: PokemonSpeciesResolvers<ContextType>;
  PokemonSpeciesDexEntry?: PokemonSpeciesDexEntryResolvers<ContextType>;
  PokemonSpeciesGender?: PokemonSpeciesGenderResolvers<ContextType>;
  PokemonSpeciesVariety?: PokemonSpeciesVarietyResolvers<ContextType>;
  PokemonSprites?: PokemonSpritesResolvers<ContextType>;
  PokemonStat?: PokemonStatResolvers<ContextType>;
  PokemonType?: PokemonTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  SuperContestEffect?: SuperContestEffectResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  TypePokemon?: TypePokemonResolvers<ContextType>;
  TypeRelations?: TypeRelationsResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  VerboseEffect?: VerboseEffectResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
  VersionEncounterDetail?: VersionEncounterDetailResolvers<ContextType>;
  VersionGameIndex?: VersionGameIndexResolvers<ContextType>;
  VersionGroup?: VersionGroupResolvers<ContextType>;
  VersionGroupFlavorText?: VersionGroupFlavorTextResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;