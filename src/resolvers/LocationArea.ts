import type { IResolvers } from 'apollo-server';

import type { LocationArea, EncounterMethodRate, EncounterVersionDetails, PokemonEncounter } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  LocationArea: {
    location: async (parent: LocationArea , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.location(parent.location.name);
    }
  },
  EncounterMethodRate: {
    encounter_method: async (parent: EncounterMethodRate , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.encounterMethod(parent.encounter_method.name);
    }
  },
  EncounterVersionDetails: {
    version: async (parent: EncounterVersionDetails , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.version(parent.version.name);
    }
  },
  PokemonEncounter: {
    pokemon: async (parent: PokemonEncounter , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    }
  }
};

export default resolver;
