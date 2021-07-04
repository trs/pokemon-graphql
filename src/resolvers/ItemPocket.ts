import type { IResolvers } from 'apollo-server';

import type { ItemPocket } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  ItemPocket: {
    categories: async (parent: ItemPocket , _args, {dataSources}: Context) => {
      return parent.categories.map((category) => {
        return dataSources.pokemonAPI.itemCategory(category.name);
      });
    }
  }
};

export default resolver;
