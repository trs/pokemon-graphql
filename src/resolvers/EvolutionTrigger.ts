import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { EvolutionTrigger } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EvolutionTrigger: {
    pokemon_species: async (parent: EvolutionTrigger, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      });
    }
  },

  Query: {
    evolutionTriggerList: queryListFactory('evolutionTriggerList'),
    evolutionTrigger: queryFactory('evolutionTrigger')
  }
};

export default resolver;
