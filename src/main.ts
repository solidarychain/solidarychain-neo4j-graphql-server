import { Neo4jGraphQL, Neo4jGraphQLSubscriptionsSingleInstancePlugin } from '@neo4j/graphql';
import { OGM } from '@neo4j/graphql-ogm';
import { Neo4jGraphQLAuthJWKSPlugin } from '@neo4j/graphql-plugin-auth';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { Driver } from 'neo4j-driver';
import { AUTH_JWKS_ENDPOINT, driver, HTTP_SERVER_PORT } from './app';
import { typeDefs } from './gql';

// magic! Load library based on the type definitions
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  // add plugins
  plugins: {
    subscriptions: new Neo4jGraphQLSubscriptionsSingleInstancePlugin(),
    auth: new Neo4jGraphQLAuthJWKSPlugin({
      jwksEndpoint: AUTH_JWKS_ENDPOINT,
    }),  
  },
});

export const ogm = new OGM({
  typeDefs,
  driver,
});

// available when handling requests, needs to be provided by the implementor
type ServerContext = {
  ogm: OGM,
  driver: Driver,
}
// available in GraphQL, during execution/subscription
interface UserContext {}

// Generates graphql schema and resolvers, connect to neo4j
neoSchema.getSchema().then(async (schema) => {
  await ogm.init();
  const yoga = createYoga<ServerContext, UserContext>({
    schema,
    context: {
      ogm,
    }
  });
  const server = createServer(yoga);
  server.listen(HTTP_SERVER_PORT, () => {
    console.log(`server listening on http://localhost:${HTTP_SERVER_PORT}/graphql`)
  })
});
