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

export type APIResource = {
  url: string;
}
