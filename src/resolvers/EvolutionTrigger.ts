import type { IResolvers } from 'apollo-server';

import type { EvolutionTrigger } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EvolutionTrigger: {
    pokemon_species: async (parent: EvolutionTrigger, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      });
    }
  }
};

export default resolver;
