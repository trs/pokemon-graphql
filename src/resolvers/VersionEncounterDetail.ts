import type { IResolvers } from 'apollo-server';

import type { VersionEncounterDetail } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  VersionEncounterDetail: {
    version: async (parent: VersionEncounterDetail, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    }
  }
};

export default resolver;
