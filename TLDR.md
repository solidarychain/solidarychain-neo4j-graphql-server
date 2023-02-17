# TLDR

## Links

- [http://localhost:5000/graphql](http://localhost:5000/graphql)

## Init DB

- [Neo.ClientError.Statement.ExternalResourceFailed](https://stackoverflow.com/questions/56573653/neo-clienterror-statement-externalresourcefailed)

or read notes at **Neo4j - How To**

book page 71

```cypher
MATCH (n) DETACH DELETE n;

:play grandstack
Added 36 labels, created 36 nodes, set 121 properties, created 41 relationships, completed after 4188 ms.

CREATE FULLTEXT INDEX businessNameIndex FOR (b:Business) ON EACH [b.name]

CALL db.schema.visualization();

MATCH (n) RETURN n;
```

![images](attachments/2023-02-16-22-02-27.png)

![image](attachments/2023-02-16-22-03-37.png)
