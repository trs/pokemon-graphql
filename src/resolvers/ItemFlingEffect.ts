import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { ItemFlingEffect } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  ItemFlingEffect: {
    items: async (parent: ItemFlingEffect , _args, {dataSources}: Context) => {
      return parent.items.map((item) => {
        return dataSources.pokemonAPI.item(item.name);
      });
    }
  },

  Query: {
    itemFlingEffectList: queryListFactory('itemFlingEffectList'),
    itemFlingEffect: queryFactory('itemFlingEffect')
  }
};

export default resolver;
