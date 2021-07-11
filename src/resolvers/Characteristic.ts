import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    characteristicList: queryListFactory('characteristicList'),
    characteristic: queryFactory('characteristic')
  }
};

export default resolver;
