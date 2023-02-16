# NOTES

## Reference projects:

- `~/Development/Svelte/SvelteKit/SvelteKitGraphQLUrqlStarter/server-solidarychain`

- `~/Development/Neo4j/Neo4jFullstackGraphQLApplicationsWithReactNodejsAndNeo4jBook/code/chapter7/api`
- `~/Development/Neo4j/TypescriptNodeNeo4jGraphqlLibraryStarter/packages/neo4j-gqllib-starter`

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

