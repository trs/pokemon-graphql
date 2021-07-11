import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { Location } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Location: {
    region: async (parent: Location , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.region(parent.region.name);
    },
    areas: async (parent: Location , _args, {dataSources}: Context) => {
      return parent.areas.map((area) => {
        return dataSources.pokemonAPI.locationArea(area.name);
      });
    }
  },

  Query: {
    locationList: queryListFactory('locationList'),
    location: queryFactory('location')
  }
};

export default resolver;
