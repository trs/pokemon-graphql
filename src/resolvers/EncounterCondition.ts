import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { EncounterCondition } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EncounterCondition: {
    values: async (parent: EncounterCondition, _args, {dataSources}: Context) => {
      return parent.values.map((value) => {
        return dataSources.pokemonAPI.encounterConditionValue(value.name);
      });
    }
  },

  Query: {
    encounterConditionList: queryListFactory('encounterConditionList'),
    encounterCondition: queryFactory('encounterCondition')
  }
};

export default resolver;
