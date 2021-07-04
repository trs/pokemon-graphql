import type { IResolvers } from 'apollo-server';

import type { Effect } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Effect: {
    language: async (parent: Effect, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  }
};

export default resolver;
