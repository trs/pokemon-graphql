import type { IResolvers } from 'apollo-server';

import type { VersionGroupFlavorText } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  VersionGroupFlavorText: {
    language: async (parent: VersionGroupFlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    },
    version_group: async (parent: VersionGroupFlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  }
};

export default resolver;
