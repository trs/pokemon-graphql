import type { IResolvers } from 'apollo-server';

import { listFactory, singleFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    moveBattleStyleList: listFactory('moveBattleStyleList'),
    moveBattleStyle: singleFactory('moveBattleStyle')
  }
};

export default resolver;
