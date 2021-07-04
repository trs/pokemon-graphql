import type { IResolvers } from 'apollo-server';

import type { VersionGameIndex } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  VersionGameIndex: {
    version: async (parent: VersionGameIndex, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    }
  }
};

export default resolver;
