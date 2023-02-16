```cypher
CALL db.index.fulltext.queryNodes( 'businessNameIndex', 'Koakk~')
YIELD node RETURN node
```
