import type { IResolvers } from 'apollo-server';

import { getAPIResourceID } from './utils/getAPIResourcePath';

import type { PokemonSpecies, Genus, PokemonSpeciesDexEntry, PalParkEncounterArea, PokemonSpeciesVariety } from '../generated/graphql';
import type { Context } from './utils/types';

const resolver: IResolvers = {
  PokemonSpecies: {
    growth_rate: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.growthRate(parent.growth_rate.name);
    },
    egg_groups: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return parent.egg_groups.map((egg) => {
        return dataSources.pokemonAPI.eggGroup(egg.name);
      })
    },
    color: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonColor(parent.color.name);
    },
    shape: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonShape(parent.shape.name);
    },
    evolves_from_species: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonSpecies(parent.evolves_from_species.name);
    },
    evolution_chain: async (parent: PokemonSpecies, _args, {dataSources}: Context) => {
      const id = getAPIResourceID(parent.evolution_chain);
      if (!id) return null;

      return dataSources.pokemonAPI.evolutionChain(id);
    },
    habitat: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemonHabitat(parent.habitat.name);
    },
    generation: async (parent: PokemonSpecies , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.generation(parent.generation.name);
    },
  },
  Genus: {
    language: async (parent: Genus , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.language(parent.language.name);
    },
  },
  PokemonSpeciesDexEntry: {
    pokedex: async (parent: PokemonSpeciesDexEntry , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokedex(parent.pokedex.name);
    },
  },
  PalParkEncounterArea: {
    area: async (parent: PalParkEncounterArea , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.palParkArea(parent.area.name);
    },
  },
  PokemonSpeciesVariety: {
    pokemon: async (parent: PokemonSpeciesVariety , _args, {dataSources}: Context) => {
      return dataSources.pokemonAPI.pokemon(parent.pokemon.name);
    },
  }
};

export default resolver;
