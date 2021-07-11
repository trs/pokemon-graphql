import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { Version } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Version: {
    version_group: async (parent: Version, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  },

  Query: {
    versionList: queryListFactory('versionList'),
    version: queryFactory('version')
  }
};

export default resolver;
