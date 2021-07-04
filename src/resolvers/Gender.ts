import type { IResolvers } from 'apollo-server';

import type { Gender, PokemonSpeciesGender } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  Gender: {
    required_for_evolution: async (parent: Gender, _args, {dataSources}: Context) => {
      return parent.required_for_evolution.map(async (species) => {
        return dataSources.pokemonAPI.pokemonSpecies(species.name);
      })
    }
  },
  PokemonSpeciesGender: {
    pokemon_species: async (parent: PokemonSpeciesGender, _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.pokemon_species.name);
    }
  }
};

export default resolver;
