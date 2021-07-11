import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { Type, TypePokemon, TypeRelations } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Type: {
    generation: async (parent: Type, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.generation.name);
    },
    move_damage_class: async (parent: Type, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveDamageClass(parent.move_damage_class.name);
    },
    moves: async (parent: Type, _args, {dataSources}: Context) => {
      return parent.moves.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    }
  },
  TypePokemon: {
    pokemon: async (parent: TypePokemon, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    },
  },
  TypeRelations: {
    no_damage_to: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
    half_damage_to: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
    double_damage_to: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
    no_damage_from: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
    half_damage_from: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
    double_damage_from: async (parent: TypeRelations, _args, {dataSources}: Context) => {
      return parent.no_damage_to.map((type) => {
        return dataSources.pokemonAPI.type(type.name);
      })
    },
  },

  Query: {
    typeList: queryListFactory('typeList'),
    type: queryFactory('type')
  }
};

export default resolver;
