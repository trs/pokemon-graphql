import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';
import { resolveResourceListFactory } from './utils/resolverFactory';

import type { BerryFirmness } from '../generated/graphql';

const resolver: IResolvers = {
  BerryFirmness: {
    berries: resolveResourceListFactory<BerryFirmness>((parent) => parent.berries)
  },

  Query: {
    berryFirmnessList: queryListFactory('berryFirmnessList'),
    berryFirmness: queryFactory('berryFirmness')
  }
};

export default resolver;
