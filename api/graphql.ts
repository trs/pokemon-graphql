import {ApolloServer} from '@saeris/apollo-server-vercel';

import config from '../src/server';

const server = new ApolloServer(config);

export default server.createHandler();
