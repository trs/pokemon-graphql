import type { IResolvers } from 'apollo-server';

import { queryListFactory, queryFactory } from './utils/queryFactory';
import { resolveResourceListFactory } from './utils/resolverFactory';

import type { EggGroup } from '../generated/graphql';

const resolver: IResolvers = {
  EggGroup: {
    pokemon_species: resolveResourceListFactory<EggGroup>((parent) => parent.pokemon_species)
  },

  Query: {
    eggGroupList: queryListFactory('eggGroupList'),
    eggGroup: queryFactory('eggGroup')
  }
};

export default resolver;
