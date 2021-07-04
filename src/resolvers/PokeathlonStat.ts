import type { IResolvers } from 'apollo-server';

import type { NaturePokeathlonStatAffect } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  NaturePokeathlonStatAffect: {
    nature: async (parent: NaturePokeathlonStatAffect, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.nature(parent.nature.name);
    }
  }
};

export default resolver;
