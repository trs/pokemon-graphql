import typeDefs from './types';
import resolvers from './resolvers';
import dataSources from "./data";

export default {
  typeDefs,
  resolvers,
  dataSources,
  playground: true,
  introspection: true,
};
