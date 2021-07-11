import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

import type { PokemonHabitat } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PokemonHabitat: {
    pokemon_species: async (parent: PokemonHabitat , _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  },

  Query: {
    pokemonHabitatList: listFactory('pokemonHabitatList'),
    pokemonHabitat: singleFactory('pokemonHabitat')
  }
};

export default resolver;
