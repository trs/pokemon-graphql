import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

import type { Generation } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Generation: {
    abilities: async (parent: Generation, _args, {dataSources}: Context) => {
      return parent.abilities.map((ability) => {
        return dataSources.pokemonAPI.ability(ability.name);
      });
    },
    main_region: async (parent: Generation, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.region(parent.main_region.name);
    },
    moves: async (parent: Generation, _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      });
    },
    pokemon_species: async (parent: Generation, _args, {dataSources}: Context) => {
      return parent.pokemon_species.map((species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      });
    },
    types: async (parent: Generation, _args, {dataSources}: Context) => {
      return parent.types.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      });
    },
    version_groups: async (parent: Generation, _args, {dataSources}: Context) => {
      return parent.version_groups.map((version) => {
        return dataSources.pokemonAPI.versionGroup(version.name);
      });
    },
  },

  Query: {
    generationList: listFactory('generationList'),
    generation: singleFactory('generation')
  }
};

export default resolver;
