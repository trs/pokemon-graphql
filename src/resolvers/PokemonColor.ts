import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { PokemonColor } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PokemonColor: {
    pokemon_species: async (parent: PokemonColor, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  },

  Query: {
    pokemonColorList: queryListFactory('pokemonColorList'),
    pokemonColor: queryFactory('pokemonColor')
  }
};

export default resolver;
