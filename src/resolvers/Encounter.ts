import type { IResolvers } from 'apollo-server';

import type { Encounter } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Encounter: {
    condition_values: async (parent: Encounter, _args, {dataSources}: Context) => {
      return parent.condition_values.map((condition) => {
        return dataSources.pokemonAPI.encounterConditionValue(condition.name);
      })
    },
    method: async (parent: Encounter, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.encounterMethod(parent.method.name);
    }
  }
};

export default resolver;
