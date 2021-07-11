import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

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
    locationList: listFactory('locationList'),
    location: singleFactory('location')
  }
};

export default resolver;
