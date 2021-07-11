import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { ItemAttribute } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  ItemAttribute: {
    items: async (parent: ItemAttribute , _args, {dataSources}: Context) => {
      return parent.items.map((item) => {
        return dataSources.pokemonAPI.item(item.name);
      });
    },
  },

  Query: {
    itemAttributeList: queryListFactory('itemAttributeList'),
    itemAttribute: queryFactory('itemAttribute')
  }
};

export default resolver;
