import type { Context, Pagination, PokemonDataMethods } from './types';

export const resolveResourceFactory = <P>(method: PokemonDataMethods, getArgument: (parent: P) => string) => {
  return async (parent: P, _args: unknown, {dataSources}: Context) => {
    return dataSources.pokemonAPI[method](getArgument(parent));
  }
}

export const resolveResourceListFactory = <P>(getArgument: (parent: P) => any[], max: number = 10) => {
  return async (parent: P, {offset, limit}: Pagination) => {
    limit = Math.min(max, limit);
    offset = offset ?? 0;

    const values = getArgument(parent);
    if (!values) return {
      offset,
      limit,
      count: 0,
      list: []
    }

    const count = values.length;
    const list = values.slice(offset, offset + limit);
    return {
      offset,
      limit,
      count,
      list
    }
  }
}
