# Test

This project was generated using [Nx](https://nx.dev).

## Description

Angular single web page that visualizes a table after calling a public api.
This application uses the [angular material](https://material.angular.io/) components.

The elements in the table can be deleted or visualized on a separate modal and updated.

A new item can be created, with the same modal.

The table is sortable and can be filtered, using the behaviors provided by the material table.

the changes to the fruits (sorting, adding, removing or editing an item) are managed with a ngrx state.

## Public api details

Public api used: https://www.fruityvice.com/.

Documentation swagger file written following the openapi version 3 specification.

To test the OpenAPI linting run:

```
swagger-cli validate api-def.yaml
```

Dependencies required:

- swagger-cli for linting
- openapi-generator-cli version 4.3.1

[Openapi generator](https://openapi-generator.tech/docs/generators/typescript-angular) it's a valid tool to define in an independent service that configures and uses the HttpClient to perform api calls, leaving less space to errors.

The api is used just for retrieving the data. In case of an api that permits update creation and delete, the api definition can be updated with the new endpoints, and the instruction to generate the module rerun. See details in [data access module README.md](libs/data-access-fruits/src/lib/README.md)

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/getting-started/intro)

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

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

Libraries are shareable across libraries and applications. They can be imported from `@test/mylib`.

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

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
