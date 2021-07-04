import type { IResolvers } from 'apollo-server';

import type { BerryFlavor, FlavorBerryMap } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  BerryFlavor: {
    contest_type: async (parent: BerryFlavor, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.contestType(parent.contest_type.name);
    }
  },
  FlavorBerryMap: {
    berry: async (parent: FlavorBerryMap, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berry(parent.berry.name);
    }
  }
};

export default resolver;