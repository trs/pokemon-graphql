import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { PokemonForm } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PokemonForm: {
    pokemon: async (parent: PokemonForm , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    },
    version_group: async (parent: PokemonForm , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    },
  },

  Query: {
    pokemonFormList: queryListFactory('pokemonFormList'),
    pokemonForm: queryFactory('pokemonForm')
  }
};

export default resolver;
