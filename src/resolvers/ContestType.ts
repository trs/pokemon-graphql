import type { IResolvers } from 'apollo-server';

import type { ContestType, ContestName } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  ContestType: {
    berry_flavor: async (parent: ContestType, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.berryFlavor(parent.berry_flavor.name);
    }
  },
  ContestName: {
    language: async (parent: ContestName, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  }
};

export default resolver;
