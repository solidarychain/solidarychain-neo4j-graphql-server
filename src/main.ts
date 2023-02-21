
import { neo4jConnect, startServer } from "./app";
import * as dotenv from "dotenv";
dotenv.config();
import createDebugger from "./app/debugger";

process.env.NODE_ENV="development";
process.env.DEBUG="@neo4j/graphql:execute,Application:*,Server:*,Neo4j:*,Seeder:*";

console.log(process.env['DEBUG'])
const debug = createDebugger('Application');

const main = async () => {
  debug('Starting');
  await neo4jConnect();
  await startServer();
  debug('Started');
}
main();
