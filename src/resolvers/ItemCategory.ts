import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { ItemCategory } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  ItemCategory: {
    items: async (parent: ItemCategory , _args, {dataSources}: Context) => {
      return parent.items.map((item) => {
        return dataSources.pokemonAPI.item(item.name);
      });
    },
    pocket: async (parent: ItemCategory , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.itemPocket(parent.pocket.name);
    },
  },

  Query: {
    itemCategoryList: queryListFactory('itemCategoryList'),
    itemCategory: queryFactory('itemCategory')
  }
};

export default resolver;
