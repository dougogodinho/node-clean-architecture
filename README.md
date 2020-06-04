# TypeScript scaffold
This is just a project to show a nice project structure that fits well almost any
project that tries to archive a nice Clean/Hexagonal Architecture.

This is just a couple of ideas and my own opinion, feel free to customize to fet
your project needs as well as your ideas, or even use the steps below to reproduce
the scafold from scratch... Then, after know how to do, Im pretty sure that you 
will never comeback to this repository... if you think that is the case, `⭐️ STAR me up! ⭐` 

## Steps to Reproduce

### Initialize Node project
```bash
yarn init -y
mkdit src
git init
```
Consider to add a `.gitignore` file

### Add initial tooling
```bash
yarn  add typescript eslint sucrase jest ts-jest -D
```

### Setup ESLint with StandardJS
```bash
yarn eslint --init
yarn add -D eslint-config-standard-with-typescript
rm package-lock.json && yarn
```
Then, on `.eslintrc.js`:
- Change `extends: 'standard-with-typescript'`  
- Add `project: './tsconfig.json'` to `parserOptions`
- Add  `jest: true` to `env`

If you are on a JetBrains IDE: 
1. On `Settings` > `Code Style` > `JavaScript`, 
    1. then, `Set from...` > `JavaScript Standard Style`
1. On `Settings` > `Code Style` > `TypeScript`, 
    1. then, `Set from...` > `JavaScript` (to copy from the step above)
    1. on the Cog icon: `Export` > `EditorConfig File`
1. On `Settings`, search for `ESLint`
    1. check: `Automatic ESLint configuration`
    1. check: `Run eslint --fix on save`... the ESLint magic is ready!

References 
| [ESLint](https://eslint.org)
| [Standard](https://standardjs.com)
| [Standard with TypeScript](https://github.com/standard/eslint-config-standard-with-typescript#readme) 

### Setup TypeScript 
```bash
yarn tsc --init
yarn add @types/node @types/jest -D
```
Add (or uncomment) "outDir": "./dist" and  "rootDir": "./src" to 

References 
| [TypeScript](https://www.typescriptlang.org/docs)
| [@types/...](https://github.com/DefinitelyTyped/DefinitelyTyped)

### Setup Jest 
```bash
yarn jest --init
```
Then, add `preset: "ts-jest"` to `jest.config.js`

References 
| [Jest](https://jestjs.io)
| [Jest with Typescript (ts-jest)](https://github.com/kulshekhar/ts-jest)

### Sucrase or TS-node
Choose your weapons, they say... Both Sucrase and TS-node are like Babel
but better/easier/faster/no-setup. 
I chose Sucrase here because Sucrase is faster, but TS-node 
is a more complex solution.  

References 
| [Sucrase](https://github.com/alangpierce/sucrase)
| [TS-node](https://github.com/TypeStrong/ts-node)

### Setup Express and Apollo
```bash
yarn add awilix express apollo-server-express graphql
```
Then, check src folder from this repo if you need some ideas

References 
| [Awilix](https://github.com/jeffijoe/awilix)
| [Express](https://expressjs.com/en/starter/hello-world.html)
| [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
| [Apollo Server with Express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/)
| [GraphQL](https://graphql.org/learn/)

Also... check `package.json` for some smart scripts 😉  

[]: https://github.com/standard/eslint-config-standard-with-typescript#readme