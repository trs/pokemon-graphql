import type { IResolvers } from 'apollo-server';

import type { Ability, Pokemon, Type } from '../generated/graphql';
import type { Pagination, Context, ID } from './utils/types';

const resolver: IResolvers = {
  Query: {
    abilityList: async (_parent: undefined, {limit, offset}: Pagination, {dataSources}: Context) => {
      const {count, results} = await dataSources.pokemonAPI.abilityList(Math.min(100, limit), offset);
      const list = await Promise.all(results.map(async (ability: Ability) => {
        return dataSources.pokemonAPI.ability(ability.name);
      }));

      return {
        offset,
        limit,
        count,
        list
      };
    },
    ability: (_parent: undefined, {id}: ID, {dataSources}: Context) => {
      return dataSources.pokemonAPI.ability(id);
    },

    pokemonList: async (_parent: undefined, {limit, offset}: Pagination, {dataSources}: Context) => {
      const {count, results} = await dataSources.pokemonAPI.pokemonList(Math.min(100, limit), offset);
      const list = await Promise.all(results.map((pokemon: Pokemon) => {
        return dataSources.pokemonAPI.pokemon(pokemon.name);
      }));

      return {
        offset,
        limit,
        count,
        list
      };
    },
    pokemon: (_parent: undefined, {id}: ID, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(id);
    },

    typeList: async (_parent: undefined, {limit, offset}: Pagination, {dataSources}: Context) => {
      const {count, results} = await dataSources.pokemonAPI.typeList(Math.min(100, limit), offset);
      const list = await Promise.all(results.map((type: Type) => {
        return dataSources.pokemonAPI.type(type.name);
      }));

      return {
        offset,
        limit,
        count,
        list
      };
    },
    type: (_parent: undefined, {id}: ID, {dataSources}: Context) => {
      return dataSources.pokemonAPI.type(id);
    }
  }
};

export default resolver;
