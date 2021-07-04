import type { IResolvers } from 'apollo-server';

import type { FlavorText } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  FlavorText: {
    language: async (parent: FlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    },
    version: async (parent: FlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    }
  }
};

export default resolver;
