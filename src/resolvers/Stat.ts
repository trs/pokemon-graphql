import type { IResolvers } from 'apollo-server';

import { getAPIResourceID } from './utils/getAPIResourcePath';

import type { Stat, MoveStatAffect, NatureStatAffectSets } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Stat: {
    characteristics: async (parent: Stat, _args, {dataSources}: Context) => {
      return parent.characteristics.map((characteristic) => {
        const id = getAPIResourceID(characteristic);
        if (!id) return null;

        return dataSources.pokemonAPI.characteristic(id);
      })
    },
    move_damage_class: async (parent: Stat, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveDamageClass(parent.move_damage_class.name);
    }
  },
  MoveStatAffect: {
    move: async (parent: MoveStatAffect, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.move(parent.move.name);
    }
  },
  NatureStatAffectSets: {
    increase: async (parent: NatureStatAffectSets, _args, {dataSources}: Context) => {
      return parent.increase.map((nature) => {
        return dataSources.pokemonAPI.nature(nature.name);
      })
    },
    decrease: async (parent: NatureStatAffectSets, _args, {dataSources}: Context) => {
      return parent.decrease.map((nature) => {
        return dataSources.pokemonAPI.nature(nature.name);
      })
    }
  }
};

export default resolver;
