import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    characteristicList: listFactory('characteristicList'),
    characteristic: singleFactory('characteristic')
  }
};

export default resolver;
