import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { PalParkEncounterSpecies } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PalParkEncounterSpecies: {
    pokemon_species: async (parent: PalParkEncounterSpecies, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.pokemon_species.name);
    },
  },

  Query: {
    palParkAreaList: queryListFactory('palParkAreaList'),
    palParkArea: queryFactory('palParkArea')
  }
};

export default resolver;
