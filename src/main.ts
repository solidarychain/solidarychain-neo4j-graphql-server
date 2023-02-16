import { neo4jConnect, startServer } from "./app";
import createDebugger from "./app/debugger";

const debug = createDebugger('Application');

const main = async () => {
  debug('Starting');
  await neo4jConnect();
  await startServer();
  debug('Started');
}
main();
