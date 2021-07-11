import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { Nature, NatureStatChange, MoveBattleStylePreference } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Nature: {
    decreased_stat: async (parent: Nature, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.stat(parent.decreased_stat.name);
    },
    increased_stat: async (parent: Nature, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.stat(parent.increased_stat.name);
    },
    hates_flavor: async (parent: Nature, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFlavor(parent.hates_flavor.name);
    },
    likes_flavor: async (parent: Nature, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFlavor(parent.likes_flavor.name);
    }
  },
  NatureStatChange: {
    pokeathlon_stat: async (parent: NatureStatChange, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokeathlonStat(parent.pokeathlon_stat.name);
    }
  },
  MoveBattleStylePreference: {
    move_battle_style: async (parent: MoveBattleStylePreference, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveBattleStyle(parent.move_battle_style.name);
    }
  },

  Query: {
    natureList: queryListFactory('natureList'),
    nature: queryFactory('nature')
  }
};

export default resolver;
