import type { IResolvers } from 'apollo-server';

import type { Machine } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Machine: {
    item: async (parent: Machine , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.item(parent.item.name);
    },
    move: async (parent: Machine , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.move(parent.move.name);
    },
    version_group: async (parent: Machine , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    },
  }
};

export default resolver;
