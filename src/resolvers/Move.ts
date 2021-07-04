import type { IResolvers } from 'apollo-server';

import { getAPIResourceID } from './utils/getAPIResourcePath';

import type { Move, ContestComboDetail, MoveFlavorText, MoveMetaData, MoveStatChange, PastMoveStatValues } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Move: {
    contest_type: async (parent: Move , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.contestType(parent.contest_type.name);
    },
    contest_effect: async (parent: Move , _args, {dataSources}: Context) => {
      const id = getAPIResourceID(parent.contest_effect);
      if (!id) return null;

      return dataSources.pokemonAPI.contestEffect(id);
    },
    damage_class: async (parent: Move , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveDamageClass(parent.damage_class.name);
    },
    generation: async (parent: Move , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.generation.name);
    },
    super_contest_effect: async (parent: Move , _args, {dataSources}: Context) => {
      const id = getAPIResourceID(parent.super_contest_effect);
      if (!id) return null;

      return dataSources.pokemonAPI.superContestEffect(id);
    },
    target: async (parent: Move , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveTarget(parent.target.name);
    },
    type: async (parent: Move , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.type(parent.type.name);
    },
  },
  ContestComboDetail: {
    use_before: async (parent: ContestComboDetail, _args, {dataSources}: Context) => {
      return parent.use_before.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
    use_after: async (parent: ContestComboDetail, _args, {dataSources}: Context) => {
      return parent.use_after.map((move) => {
        return dataSources.pokemonAPI.move(move.name);
      })
    },
  },
  MoveFlavorText: {
    language: async (parent: MoveFlavorText , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    },
    version_group: async (parent: MoveFlavorText , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    },
  },
  MoveMetaData: {
    ailment: async (parent: MoveMetaData , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveAilment(parent.ailment.name);
    },
    category: async (parent: MoveMetaData , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.moveCategory(parent.category.name);
    },
  },
  MoveStatChange: {
    stat: async (parent: MoveStatChange , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.stat(parent.stat.name);
    },
  },
  PastMoveStatValues: {
    type: async (parent: PastMoveStatValues , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.type(parent.type.name);
    },
    version_group: async (parent: PastMoveStatValues , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    },
  }
};

export default resolver;
