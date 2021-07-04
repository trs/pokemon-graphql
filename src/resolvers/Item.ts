import type { IResolvers } from 'apollo-server';

import { getAPIResourceID } from './utils/getAPIResourcePath';

import type { Item, ItemHolderPokemon, ItemHolderPokemonVersionDetail } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Item: {
    fling_effect: async (parent: Item, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.itemFlingEffect(parent.fling_effect.name);
    },
    attributes: async (parent: Item, _args, {dataSources}: Context) => {
      return parent.attributes.map((attribute) => {
        return dataSources.pokemonAPI.itemAttribute(attribute.name);
      });
    },
    category: async (parent: Item, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.itemCategory(parent.category.name);
    },
    baby_trigger_for: async (parent: Item, _args, {dataSources}: Context) => {
      const id = getAPIResourceID(parent.baby_trigger_for);
      if (!id) return null;

      return dataSources.pokemonAPI.evolutionChain(id);
    },
  },
  ItemHolderPokemon: {
    pokemon: async (parent: ItemHolderPokemon, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    },
  },
  ItemHolderPokemonVersionDetail: {
    version: async (parent: ItemHolderPokemonVersionDetail, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    },
  }
};

export default resolver;
