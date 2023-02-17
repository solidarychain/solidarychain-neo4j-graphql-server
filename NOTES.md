# NOTES

## Reference projects:

- `~/Development/Svelte/SvelteKit/SvelteKitGraphQLUrqlStarter/server-solidarychain`

- `~/Development/Neo4j/Neo4jFullstackGraphQLApplicationsWithReactNodejsAndNeo4jBook/code/chapter7/api`
- `~/Development/Neo4j/TypescriptNodeNeo4jGraphqlLibraryStarter/packages/neo4j-gqllib-starter`

## Debug with ts-node-dev

- [How to debug Node with Typescript in Visual Studio Code( ts-node-dev)](https://medium.com/@gerssivaldo.dev/how-to-debug-node-with-typescript-in-visual-studio-code-ts-node-dev-d8329cb266c2)
- [How to debug Typescript code in Visual Studio Code with ts-node-dev and correct line numbers](https://stackoverflow.com/questions/61190639/how-to-debug-typescript-code-in-visual-studio-code-with-ts-node-dev-and-correct)

`pnpm debug`, add a `debugger;` and a breakpoint in `debug(`server...`, after save both work

```ts
    server.listen(HTTP_SERVER_PORT, () => {
      debugger;
      debug(`server listening on http://localhost:${HTTP_SERVER_PORT}/graphql`);
    });
```

## How to use Prettier with ESLint and TypeScript in VSCode

- [How to use Prettier with ESLint and TypeScript in VSCode | Khalil Stemmler](https://khalilstemmler.com/blogs/tooling/prettier/)
- [How to use ESLint with TypeScript | Khalil Stemmler](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
- [Enforcing Coding Conventions with Husky Pre-commit Hooks | Khalil Stemmler](https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/)
- [GitHub - stemmlerjs/simple-typescript-starter: The most basic TypeScript starter I could think of](https://github.com/stemmlerjs/simple-typescript-starter)

```shell
$ pnpm add -D --save-dev prettier
$ code .prettierrc
```

`.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}
```

`package.json`

```json
{
  "name": "example-node-ts",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write"
  },
}
```

```shell
$ pnpm add -D eslint eslint-config-prettier eslint-plugin-prettier
$ code .eslintrc
```

`.eslintrc`

