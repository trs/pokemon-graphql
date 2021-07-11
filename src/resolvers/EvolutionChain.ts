import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

import type { EvolutionChain, ChainLink, EvolutionDetail } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EvolutionChain: {
    baby_trigger_item: async (parent: EvolutionChain, _args, {dataSources}: Context) => {
      if (!parent.baby_trigger_item?.name) return null;

      return dataSources.pokemonAPI.item(parent.baby_trigger_item.name);
    }
  },
  ChainLink: {
    species: async (parent: ChainLink, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.species.name);
    }
  },
  EvolutionDetail: {
    item: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.item?.name) return null;

      return dataSources.pokemonAPI.item(parent.item.name);
    },
    trigger: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.trigger?.name) return null;

      return dataSources.pokemonAPI.evolutionTrigger(parent.trigger.name);
    },
    held_item: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.held_item?.name) return null;

      return dataSources.pokemonAPI.item(parent.held_item.name);
    },
    known_move: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.known_move?.name) return null;

      return dataSources.pokemonAPI.move(parent.known_move.name);
    },
    known_move_type: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.known_move_type?.name) return null;

      return dataSources.pokemonAPI.type(parent.known_move_type.name);
    },
    location: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.location?.name) return null;

      return dataSources.pokemonAPI.location(parent.location.name);
    },
    party_species: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.party_species?.name) return null;

      return dataSources.pokemonAPI.pokemonSpecies(parent.party_species.name);
    },
    party_type: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.party_type?.name) return null;

      return dataSources.pokemonAPI.type(parent.party_type.name);
    },
    trade_species: async (parent: EvolutionDetail, _args, {dataSources}: Context) => {
      if (!parent.trade_species?.name) return null;

      return dataSources.pokemonAPI.pokemonSpecies(parent.trade_species.name);
    },
  },

  Query: {
    evolutionChainList: listFactory('evolutionChainList'),
    evolutionChain: singleFactory('evolutionChain')
  }
};

export default resolver;
