import type { IResolvers } from 'apollo-server';

import type { GenerationGameIndex } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  GenerationGameIndex: {
    generation: async (parent: GenerationGameIndex, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.generation.name);
    }
  }
};

export default resolver;
