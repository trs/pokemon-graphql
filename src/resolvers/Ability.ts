import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';
import { resolveNamedResourceFactory } from './utils/resolverFactory';

import type { Ability, AbilityEffectChange, AbilityFlavorText, AbilityPokemon } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Ability: {
    generation: resolveNamedResourceFactory<Ability>('generation', (parent) => parent.generation.name)
    // generation: async (parent: Ability, _args, {dataSources}: Context) => {
    //   return dataSources.pokemonAPI.generation(parent.generation.name);
    // }
  },
  AbilityEffectChange: {
    version_group: async (parent: AbilityEffectChange, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  },
  AbilityFlavorText: {
    language: async (parent: AbilityFlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    },
    version_group: async (parent: AbilityFlavorText, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  },
  AbilityPokemon: {
    pokemon: async (parent: AbilityPokemon, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    }
  },

  Query: {
    abilityList: listFactory('abilityList'),
    ability: singleFactory('ability')
  }
};

export default resolver;
