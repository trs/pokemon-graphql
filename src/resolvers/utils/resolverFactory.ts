import type { Context, PokemonDataMethods } from './types';

export const resolveNamedResourceFactory = <P>(method: PokemonDataMethods, getArgument: (parent: P) => string) => {
  return async (parent: P, _args: unknown, {dataSources}: Context) => {
    return dataSources.pokemonAPI[method](getArgument(parent));
  }
}
