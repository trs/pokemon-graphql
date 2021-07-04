import type { IResolvers } from 'apollo-server';

import { getAPIResourceID } from './utils/getAPIResourcePath';

import type { MachineVersionDetail } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  MachineVersionDetail: {
    machine: async (parent: MachineVersionDetail, _args, {dataSources}: Context) => {
      const id = getAPIResourceID(parent.machine);
      if (!id) return null;

      return dataSources.pokemonAPI.machine(id);
    },
    version_group: async (parent: MachineVersionDetail, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.versionGroup(parent.version_group.name);
    }
  }
};

export default resolver;
