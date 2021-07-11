import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    encounterMethodList: listFactory('encounterMethodList'),
    encounterMethod: singleFactory('encounterMethod')
  }
};

export default resolver;
