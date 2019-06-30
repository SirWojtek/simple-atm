# Simple ATM

## Overview

This project is demonstrating complete approach for a web based withdraw machine.
The main goal was to keep it **simple** but not primitive.
The repository contains self contained environment ready to start on the local machine.

It contains:
* backend - node.js + Express server with one endpoint for withdrawal
* frontend - a web application written in Angular 2 + Material
* tests - both frontend and backend are utested, there are also bunch of e2e tests


### Backend

Written in node.js + typescript makes it scalable and enjoyable to development, thanks to typings.
The thin layer of express routing is separated from the business logic located in `functions` directory.

### Frontend

It is written in the second most popular web framework (at least for now!) Angular 2.
To emphasize that simpiness is the main goal, the UI is designed using Material Design library.

### Tests

The application is well tested thanks to three different ways of tests used:
* backend unit tests
* frontend unit tests
* e2e unit tests (involving both frontend and backend)


## Installation guide

It's **simple**:
```
yarn && yarn prepare
```

*Because scripts located in `package.json` are using `yarn` internally, it's adviced to use `yarn`.*

## Running

Command
```
yarn start
```

starts the local backend and frontend. The web UI is available on `localhost:4200`.

## Tests

To run all available tests, use:
```
yarn tests
```

*Please note that for e2e tests you will need Chrome to be installed*

