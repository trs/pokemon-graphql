import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { BerryFlavor, FlavorBerryMap } from '../generated/graphql';
import type { Context } from './utils/types';
import { resolveResourceListFactory } from './utils/resolverFactory';

const resolver: IResolvers = {
  BerryFlavor: {
    contest_type: async (parent: BerryFlavor, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.contestType(parent.contest_type.name);
    },
    berries: resolveResourceListFactory<BerryFlavor>((parent) => parent.berries)
  },
  FlavorBerryMap: {
    berry: async (parent: FlavorBerryMap, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berry(parent.berry.name);
    }
  },

  Query: {
    berryFlavorList: queryListFactory('berryFlavorList'),
    berryFlavor: queryFactory('berryFlavor')
  }
};

export default resolver;
