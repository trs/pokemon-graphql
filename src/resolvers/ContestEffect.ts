import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    contestEffectList: listFactory('contestEffectList'),
    contestEffect: singleFactory('contestEffect')
  }
};

export default resolver;
