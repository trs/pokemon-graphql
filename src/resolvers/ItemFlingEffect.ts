import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

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
    itemFlingEffectList: listFactory('itemFlingEffectList'),
    itemFlingEffect: singleFactory('itemFlingEffect')
  }
};

export default resolver;
