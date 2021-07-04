import type { IResolvers } from 'apollo-server';

import type { Description } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Description: {
    language: async (parent: Description, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  }
};

export default resolver;
