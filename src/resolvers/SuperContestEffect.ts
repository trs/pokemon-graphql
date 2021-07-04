import type { IResolvers } from 'apollo-server';

import type { SuperContestEffect } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  SuperContestEffect: {
    moves: async (parent: SuperContestEffect, _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    }
  }
};

export default resolver;
