import type { IResolvers } from 'apollo-server';

import { queryListFactory } from './utils/queryFactory';

import type { LocationAreaEncounter } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  LocationAreaEncounter: {
    location_area: async (parent: LocationAreaEncounter , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.locationArea(parent.location_area.name);
    }
  },

  Query: {
    locationAreaEncounterList: queryListFactory('pokemonEncounterList')
  }
};

export default resolver;
