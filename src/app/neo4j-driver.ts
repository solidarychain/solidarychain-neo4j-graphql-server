const neo4j = require('neo4j-driver');

// Create Neo4j driver
const driver = neo4j.driver(NEO4J_URL, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD));
