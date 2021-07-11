import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

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
    flavors: async (parent: Berry, _args, {dataSources}: Context) => {
      return parent.flavors.map(async (map) => {
        map.flavor = await dataSources.pokemonAPI.berryFlavor(map.flavor.name);
        return map;
      })
    }
  },
  BerryFlavorMap: {
    flavor: async (parent: BerryFlavorMap, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFlavor(parent.flavor.name);
    }
  },

  Query: {
    berryList: listFactory('berryList'),
    berry: singleFactory('berry')
  }
};

export default resolver;
