import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';

const resolver: IResolvers = {
  Query: {
    moveBattleStyleList: queryListFactory('moveBattleStyleList'),
    moveBattleStyle: queryFactory('moveBattleStyle')
  }
};

export default resolver;
