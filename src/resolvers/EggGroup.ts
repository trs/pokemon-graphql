import type { IResolvers } from 'apollo-server';

import type { EggGroup } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EggGroup: {
    pokemon_species: async (parent: EggGroup, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map(async (species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  }
};

export default resolver;
