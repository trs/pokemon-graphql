import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

import type { MoveAilment } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveAilment: {
    moves: async (parent: MoveAilment , _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
  },

  Query: {
    moveAilmentList: listFactory('moveAilmentList'),
    moveAilment: singleFactory('moveAilment')
  }
};

export default resolver;
