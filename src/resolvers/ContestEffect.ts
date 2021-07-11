import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    contestEffectList: queryListFactory('contestEffectList'),
    contestEffect: queryFactory('contestEffect')
  }
};

export default resolver;
