import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

import type { VersionGroup } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  VersionGroup: {
    generation: async (parent: VersionGroup, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.generation.name);
    },
    move_learn_methods: async (parent: VersionGroup, _args, {dataSources}: Context) => {
      return parent.move_learn_methods.map((move) => {
        return dataSources.pokemonAPI.moveLearnMethod(move.name);
      })
    },
    pokedexes: async (parent: VersionGroup, _args, {dataSources}: Context) => {
      return parent.pokedexes.map((dex) => {
        return dataSources.pokemonAPI.pokedex(dex.name);
      })
    },
    regions: async (parent: VersionGroup, _args, {dataSources}: Context) => {
      return parent.regions.map((region) => {
        return dataSources.pokemonAPI.region(region.name);
      })
    },
    versions: async (parent: VersionGroup, _args, {dataSources}: Context) => {
      return parent.versions.map((version) => {
        return dataSources.pokemonAPI.version(version.name);
      })
    },
  },

  Query: {
    versionGroupList: listFactory('versionGroupList'),
    versionGroup: singleFactory('versionGroup')
  }
};

export default resolver;
