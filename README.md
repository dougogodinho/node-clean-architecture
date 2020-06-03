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

### Setup ESLint
```bash
yarn eslint --init
rm package-lock.json && yarn
```
Then, add `jest: true` to `env` on `.eslintrc.js`

If you are on a JetBrains IDE: 
1. On `Settings` > `Code Style` > `JavaScript`, 
    1. then, `Set from...` > `JavaScript Standard Style`
1. On `Settings` > `Code Style` > `TypeScript`, 
    1. then, `Set from...` > `JavaScript` (to copy from the step above)
    1. on the Cog icon: `Export` > `EditorConfig File`
1. On `Settings`, search for `ESLint`
    1. check: `Automatic ESLint configuration`
    1. check: `Run eslint --fix on save`... the ESLint magic is ready!

### Setup TypeScript 
```bash
yarn tsc --init
yarn add @types/node @types/jest -D
```
Add (or uncomment) "outDir": "./dist" and  "rootDir": "./src" to 

### Setup Jest 
```bash
yarn jest --init
```
Then, add `preset: "ts-jest"` to `jest.config.js`

### Setup Express and Apollo
```bash
yarn add express apollo-server-express graphql
```
Then, check src folder from this repo if you need some ideas

### Add some scripts to `package.json`
```javascript
{
    "build": "tsc",
    "api": "node dist/http.js",
    "api:dev": "sucrase dist/http.ts"
}
```
   