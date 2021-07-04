import type { IResolvers } from 'apollo-server';

import type { MoveLearnMethod } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveLearnMethod: {
    version_groups: async (parent: MoveLearnMethod , _args, {dataSources}: Context) => {
      return parent.version_groups.map((version) => {
        return dataSources.pokemonAPI.versionGroup(version.name);
      })
    },
  }
};

export default resolver;
