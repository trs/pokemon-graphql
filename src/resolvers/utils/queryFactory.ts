import { Context, ID, Pagination, PokemonDataMethods } from "./types";

type NamedResource = {
  name: string
}

type PokemonDataListMethods = Extract<PokemonDataMethods, `${string}List`>;
type PokemonDataSingletMethods = Exclude<PokemonDataMethods, `${string}List`>;

export const listFactory = <T extends PokemonDataListMethods>(method: T, max: number = 100) => async (_parent: undefined, {limit, offset}: Pagination, {dataSources}: Context) => {
  const singleMethod = method.slice(0, method.length - 4) as PokemonDataSingletMethods;
  const {count, results} = await dataSources.pokemonAPI[method](Math.min(max, limit), offset);
  const list = await Promise.all(results.map(async (result: NamedResource) => {
    return dataSources.pokemonAPI[singleMethod](result.name);
  }));

  return {
    offset,
    limit,
    count,
    list
  };
};

export const singleFactory = <T extends PokemonDataSingletMethods>(method: T) => async (_parent: undefined, {id}: ID, {dataSources}: Context) => {
  return dataSources.pokemonAPI[method](id);
};
