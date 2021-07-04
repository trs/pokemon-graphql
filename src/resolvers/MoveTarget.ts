import type { IResolvers } from 'apollo-server';

import type { MoveTarget } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveTarget: {
    moves: async (parent: MoveTarget , _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
  }
};

export default resolver;