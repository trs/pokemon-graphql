import type { IResolvers } from 'apollo-server';

import type { Pokemon, PokemonAbility, PokemonType, PokemonHeldItem, PokemonHeldItemVersion, PokemonMove, PokemonMoveVersion, PokemonStat } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Pokemon: {
    forms: async (parent: Pokemon, _args, {dataSources}: Context) => {
      return parent.forms.map((form) => {
        return dataSources.pokemonAPI.pokemonForm(form.name);
      })
    },
    species: async (parent: Pokemon, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.species.name);
    },
    types: async (parent: Pokemon, _args, {dataSources}: Context) => {
      return parent.types.map(async (slot: any) => {
        slot.type = await dataSources.pokemonAPI.type(slot.type.name);
        return slot;
      });
    },
    abilities: async (parent: Pokemon, _args, {dataSources}: Context) => {
      return parent.abilities.map(async (slot: any) => {
        slot.ability = await dataSources.pokemonAPI.ability(slot.ability.name);
        return slot;
      });
    },
    // moves: async (parent, {limit, offset}, {dataSources}) => {
    //   const count = parent.moves.length;
    //   const list = Promise.all(parent.moves.slice(offset, offset + limit).map(async (slot: any) => {
    //     slot.move = dataSources.pokemonAPI.move(slot.move.name);
    //     return slot;
    //   }));

    //   return {
    //     offset,
    //     limit,
    //     count,
    //     list
    //   };
    // }
  },
  PokemonAbility: {
    ability: async (parent: PokemonAbility, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.ability(parent.ability.name);
    },
  },
  PokemonType: {
    type: async (parent: PokemonType, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.type(parent.type.name);
    },
  },
  PokemonHeldItem: {
    item: async (parent: PokemonHeldItem, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.item(parent.item.name);
    }
  },
  PokemonHeldItemVersion: {
    version: async (parent: PokemonHeldItemVersion, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    }
  },
  PokemonMove: {
    move: async (parent: PokemonMove, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.move(parent.move.name);
    }
  },
  PokemonMoveVersion: {
    move_learn_method: async (parent: PokemonMoveVersion, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveLearnMethod(parent.move_learn_method.name);
    },
    version_group: async (parent: PokemonMoveVersion, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  },
  PokemonStat: {
    stat: async (parent: PokemonStat, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.stat(parent.stat.name);
    },
  }
};

export default resolver;
