import type { IResolvers } from 'apollo-server';

import type { GrowthRate } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  GrowthRate: {
    pokemon_species: async (parent: GrowthRate, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map(async (species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  }
};

export default resolver;
