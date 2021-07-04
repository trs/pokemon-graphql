import { ApolloServer } from "apollo-server";

import config from './server';

void async function () {
  const server = new ApolloServer(config);
  const info = await server.listen();
  console.log(info.url);
}();
