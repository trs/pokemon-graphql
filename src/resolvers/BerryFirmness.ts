import type { IResolvers } from 'apollo-server';

import type { BerryFirmness } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  BerryFirmness: {
    berries: async (parent: BerryFirmness, _args, {dataSources}: Context) => {
      return parent.berries.map((berry) => {
        return dataSources.pokemonAPI.berry(berry.name);
      })
    }
  },
};

export default resolver;
