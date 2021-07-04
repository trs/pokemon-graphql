import type { IResolvers } from 'apollo-server';

import type { Pokedex, PokemonEntry } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Pokedex: {
    region: async (parent: Pokedex, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.region(parent.region.name);
    },
    version_groups: async (parent: Pokedex, _args, {dataSources}: Context) => {
      return parent.version_groups.map((version) => {
        return dataSources.pokemonAPI.versionGroup(version.name);
      });
    },
  },
  PokemonEntry: {
    pokemon_species: async (parent: PokemonEntry, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.pokemon_species.name);
    },
  }
};

export default resolver;
