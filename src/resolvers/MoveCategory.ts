import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { MoveCategory } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MoveCategory: {
    moves: async (parent: MoveCategory , _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
  },

  Query: {
    moveCategoryList: queryListFactory('moveCategoryList'),
    moveCategory: queryFactory('moveCategory')
  }
};

export default resolver;
