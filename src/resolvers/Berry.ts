import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';
import { resolveResourceListFactory } from './utils/resolverFactory';

import type { Berry, BerryFlavorMap } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Berry: {
    firmness: async (parent: Berry, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFirmness(parent.firmness.name);
    },
    item: async (parent: Berry, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFirmness(parent.item.name);
    },
    natural_gift_type: async (parent: Berry, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.type(parent.natural_gift_type.name);
    },
    flavors: resolveResourceListFactory<Berry>((parent) => parent.flavors)
  },
  BerryFlavorMap: {
    flavor: async (parent: BerryFlavorMap, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFlavor(parent.flavor.name);
    }
  },

  Query: {
    berryList: queryListFactory('berryList'),
    berry: queryFactory('berry')
  }
};

export default resolver;
