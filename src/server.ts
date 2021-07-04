import { ApolloServer } from "apollo-server";

import typeDefs from './types';
import resolvers from './resolvers';
import PokemonAPI from "./data";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI()
  })
});

export default server;
