

* 100% TypeScript with modules
* Watch Mode for development
* Full npm/yarn-based build system

#### Routes

A route is made up of a router and a controller, which both have base classes, `RestRouter` and `RestController`. The classes should cover the majority of the use cases for a REST API.

Take a look under `src/app/api/routes/artists` to see the implementation for the `/api/artists/:mbid` endpoint.

### Quick Start

```sh
# clone the repo
git clone https://github.com/bex1/test.git master

# change directory to the app
cd bex-artist

# install the dependencies with yarn or npm
yarn install

# start development mode
yarn run dev
```

Browse to:
http://localhost:3000
http://localhost:3000/api/artists/5b11f4ce-a62d-471e-81fc-a69a8278c7da

#### Dev Configuration

When running in dev mode, the application will automatically execute each time you make a change to `app.ts` or any file that `app.ts` depends on (recursively).

Modify the auto-execution delay setting in `package.json` (defaults to 1500ms) to meet your needs. Ideally, you'll choose a number that will cause your application to only restart once, each time you make typical development changes. The optimal delay time will vary depending on the size of your project and your development machine.

-----

### Other NPM tasks

After running `npm install` once, you can:

#### Build the app

```sh
npm run build
```

#### Run the app once

When running the application, you must have the required environment variables set (if you don't, it's OK - application startup with fail and notify you of the values that you need to set)

```sh
npm start
```

#### Run the linter

```sh
npm run lint
```
