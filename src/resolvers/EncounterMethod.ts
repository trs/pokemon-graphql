import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    encounterMethodList: queryListFactory('encounterMethodList'),
    encounterMethod: queryFactory('encounterMethod')
  }
};

export default resolver;
