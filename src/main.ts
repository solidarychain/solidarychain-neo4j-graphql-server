import createDebugger from "./app/debugger";
import { neo4jConnect, startServer } from "./app";

const debug = createDebugger('Application');
// fix the annoying problem with logger and neo4j, must import from exactly as above
// if import for ex with './app' it won't work
import * as neo4j from './app/neo4j-driver';
import * as server from './app/server';

const main = async () => {
  debug('Starting');
  // await neo4j.connect();
  // await server.start();
  await neo4jConnect();
  await startServer();
  debug('Started');
}
main();
