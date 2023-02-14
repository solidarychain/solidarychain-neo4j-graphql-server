import { Neo4jGraphQL, Neo4jGraphQLSubscriptionsSingleInstancePlugin } from '@neo4j/graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { driver, HTTP_SERVER_PORT } from './app';
import { typeDefs } from './gql';

// magic! Load library based on the type definitions
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  // add plugins
  plugins: {
    subscriptions: new Neo4jGraphQLSubscriptionsSingleInstancePlugin(),
  },
});

// Generates graphql schema and resolvers, connect to neo4j
neoSchema.getSchema().then((schema) => {
  const yoga = createYoga({
    schema,
  });
  const server = createServer(yoga);
  server.listen(HTTP_SERVER_PORT, () => {
    console.log(`Listening on http://localhost:${HTTP_SERVER_PORT}/graphql`)
  })
});
