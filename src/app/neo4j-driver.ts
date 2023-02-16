import neo4j from 'neo4j-driver';
import { Neo4jEncryption } from '../types';
import { NEO4J_ENCRYPTION, NEO4J_PASSWORD, NEO4J_URL, NEO4J_USER } from './config';
import createDebugger from './debugger';

const debug = createDebugger('Neo4j');

// create Neo4j driver
export const driver = neo4j.driver(
  NEO4J_URL,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD),
  { encrypted: NEO4J_ENCRYPTION === Neo4jEncryption.ENCRYPTION_ON }
);

export const neo4jConnect = async() => {
  debug('Connecting');
  const serverInfo = await driver.getServerInfo();
  debug(`serverInfo:`, JSON.stringify(serverInfo, undefined, 0));
  debug('Connected');
}

export const neo4jDisconnect = () => {
  return driver.close();
}
