import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { PokemonShape, AwesomeName } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PokemonShape: {
    pokemon_species: async (parent: PokemonShape , _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  },
  AwesomeName: {
    language: async (parent: AwesomeName , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    }
  },

  Query: {
    pokemonShapeList: queryListFactory('pokemonShapeList'),
    pokemonShape: queryFactory('pokemonShape')
  }
};

export default resolver;
