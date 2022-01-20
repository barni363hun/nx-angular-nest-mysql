
<a href="https://code.visualstudio.com/">![Visual Studio Code](https://img.shields.io/static/v1?style=for-the-badge&message=Visual+Studio+Code&color=007ACC&logo=Visual+Studio+Code&logoColor=FFFFFF&label=)</a>
<a href="https://github.com/">![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)</a>
<a href="https://nx.dev/">![Nx](https://img.shields.io/static/v1?style=for-the-badge&message=Nx&color=143055&logo=Nx&logoColor=FFFFFF&label=)</a>
<a href="https://www.mysql.com/">![MySQL](https://img.shields.io/static/v1?style=for-the-badge&message=MySQL&color=4479A1&logo=MySQL&logoColor=FFFFFF&label=)</a>
<a href="https://nestjs.com/">![NestJS](https://img.shields.io/static/v1?style=for-the-badge&message=NestJS&color=E0234E&logo=NestJS&logoColor=FFFFFF&label=)</a>
<a href="https://angular.io/">![Angular](https://img.shields.io/static/v1?style=for-the-badge&message=Angular&color=DD0031&logo=Angular&logoColor=FFFFFF&label=)</a>

# NxAngularNestMysql
This is a Template for creating a Nx-Angular-Nest-Mysql application.

Run everything under /nx-angular-nest-mysql

Use the thunder-collection_nest-mysql.json for testing
### Required to start

- `npm i`
- MySql database named "my-app-nanm" (CREATE DATABASE `my-app-nanm`;)

### Execution

Frontend _(you can reach it on http://localhost:4200/)_:

- `nx serve my-app`

Backend _(you can reach it on http://localhost:3333/)_:

- `nx serve api`

Test:

- `nx e2e my-app-e2e --watch` 
  <sub><sup>Maybe you need to wait for a bit. If cypress not works scroll down.</sup></sub>

### Build

- `nx run my-app:build`
- `nx run-many --target=build --projects=my-app,api`

### Other useful commands

- Run `nx affected:apps` to get all apps which you have changed.
- Run `nx affected:libs` to get all libraries which you have changed.
- Run `nx affected:test` to test all apps which you have changed.
- Run `nx affected:test -- --only-failed` to test all apps which failed last time.
- Run `nx test my-app` to test the 'my-app' app.
- Run `ng g @nrwl/angular:lib new-lib` to generate the 'new-lib' library.
- Run `ng g component components/my-component --project=my-app` to add 'my-component' component to the 'my-app' project

If you have issues with cypress try running:

- `npm cache clear -f`
- `npm i cypress -D`
- `node_modules/.bin/cypress install`

//what is this? ormconfig/"synchronize": false, 


# Basic NX stuff

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-angular-nest-mysql/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
