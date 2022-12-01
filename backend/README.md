# Star Wars Backend
## About the project
- Backend of technical test
- This API is a CRUD of Star Wars's characters

To see the **frontend**, click here: [Star Wars Frontend](https://github.com/INTLSavio/starwars-frontend)

## Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [MySQL](https://www.mysql.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [MySQL](https://www.mysql.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/INTLSavio/starwars-backend.git
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
```
- Start your MySQL instance
- On ormconfig.json insert your database configurations

```bash
# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```
