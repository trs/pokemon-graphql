import PokemonAPI from '../../data/pokemon';

export type Pagination = {
  limit: number;
  offset: number;
}

export type ID = {
  id: number | string;
}

export type Context = {
  dataSources: {
    pokemonAPI: PokemonAPI
  }
}

export type NamedResource = {
  name: string
}

export type APIResource = {
  url: string;
}

export type PokemonDataMethods = keyof InstanceType<typeof PokemonAPI>;

export type PokemonDataListMethods = Extract<PokemonDataMethods, `${string}List`>;

export type PokemonDataSingletMethods = Exclude<PokemonDataMethods, `${string}List`>;
