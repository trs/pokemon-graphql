import { getAPIResourceID, isNamedResource } from "./getAPIResourcePath";

import type { Context, NamedResource, ID, Pagination, PokemonDataListMethods, PokemonDataSingletMethods, APIResource } from "./types";

export const queryListFactory = <T extends PokemonDataListMethods>(method: T, max: number = 10) => async (_parent: undefined, {limit, offset}: Pagination, {dataSources}: Context) => {
  limit = Math.min(max, limit);
  offset = offset ?? 0;

  const singleMethod = method.slice(0, method.length - 4) as PokemonDataSingletMethods;
  const {count, results} = await dataSources.pokemonAPI[method](limit, offset);
  const list = await Promise.all(results.map(async (result: NamedResource | APIResource) => {
    const id = isNamedResource(result)
      ? result.name
      : getAPIResourceID(result)

    return dataSources.pokemonAPI[singleMethod](id);
  }));

  return {
    offset,
    limit,
    count,
    list
  };
};

export const queryFactory = <T extends PokemonDataSingletMethods>(method: T) => async (_parent: undefined, {id}: ID, {dataSources}: Context) => {
  return dataSources.pokemonAPI[method](id);
};
