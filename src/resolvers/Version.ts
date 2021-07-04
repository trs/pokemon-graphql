import type { IResolvers } from 'apollo-server';

import type { Version } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Version: {
    version_group: async (parent: Version, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  }
};

export default resolver;
