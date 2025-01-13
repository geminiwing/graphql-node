import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// DB
import db from './_db.js';

// import type definitions
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

// Set up apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server ready at port', 4000);
