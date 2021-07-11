import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

import type { EncounterConditionValue } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  EncounterConditionValue: {
    condition: async (parent: EncounterConditionValue, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.encounterCondition(parent.condition.name);
    }
  },

  Query: {
    encounterConditionValueList: queryListFactory('encounterConditionValueList'),
    encounterConditionValue: queryFactory('encounterConditionValue')
  }
};

export default resolver;
