import type { IResolvers } from 'apollo-server';

import type { VerboseEffect } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  VerboseEffect: {
    language: async (parent: VerboseEffect, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  }
};

export default resolver;
