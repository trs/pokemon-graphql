import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { MoveLearnMethod } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveLearnMethod: {
    version_groups: async (parent: MoveLearnMethod , _args, {dataSources}: Context) => {
      return parent.version_groups.map((version) => {
        return dataSources.pokemonAPI.versionGroup(version.name);
      })
    },
  },

  Query: {
    moveLearnMethodList: queryListFactory('moveLearnMethodList'),
    moveLearnMethod: queryFactory('moveLearnMethod')
  }
};

export default resolver;
