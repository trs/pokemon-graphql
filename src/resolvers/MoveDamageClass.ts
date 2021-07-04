import type { IResolvers } from 'apollo-server';

import type { MoveDamageClass } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveDamageClass: {
    moves: async (parent: MoveDamageClass , _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
  }
};

export default resolver;
