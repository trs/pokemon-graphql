import server from './server';

void async function () {
  const info = await server.listen();
  console.log(`🚀 Server ready at ${info.url}`);
}();
