import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

import typeDef from './graphql/typedef';
import resolvers from './graphql/resolvers';

import runBackgroundProgram from './utils/backgroundNode';
import getConnections from './utils/dataSources';

const pubSub = new PubSub();

const PORT = process.env.PORT || 5000;

if (process.env.REQUIRES_BACKGROUND_PROCESS) {
  runBackgroundProgram(process.env.BACKGROUND_TIME, getConnections);
}

mongoose.set('useUnifiedTopology', true);

const server = new ApolloServer({
  cors: {
    credentials: false,
    origin: (origin, callback) => {
      callback(null, true);
    },
  },
  typeDefs: typeDef,
  resolvers,
  dataSources: () => getConnections,
  context: ({ req }) => ({ req, pubSub }),
});

server.listen({ port: PORT });
