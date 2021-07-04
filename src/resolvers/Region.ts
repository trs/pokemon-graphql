import type { IResolvers } from 'apollo-server';

import type { Region } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Region: {
    locations: async (parent: Region , _args, {dataSources}: Context) => {
      return parent.locations.map((location) => {
        return dataSources.pokemonAPI.location(location.name);
      });
    },
    main_generation: async (parent: Region , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.main_generation.name);
    },
    pokedexes: async (parent: Region , _args, {dataSources}: Context) => {
      return parent.pokedexes.map((pokedex) => {
        return dataSources.pokemonAPI.pokedex(pokedex.name);
      });
    },
    version_groups: async (parent: Region , _args, {dataSources}: Context) => {
      return parent.version_groups.map((version) => {
        return dataSources.pokemonAPI.versionGroup(version.name);
      });
    },
  }
};

export default resolver;
