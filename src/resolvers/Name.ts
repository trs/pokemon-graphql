import type { IResolvers } from 'apollo-server';

import type { Name } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Name: {
    language: async (parent: Name, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  }
};

export default resolver;
