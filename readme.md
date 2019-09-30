# Joblocal Api-Client

![Downloads](https://img.shields.io/npm/dt/@joblocal\/api-client.svg)
![Size](https://img.shields.io/bundlephobia/min/@joblocal\/api-client.svg)
![Zipped Size](https://img.shields.io/bundlephobia/minzip/@joblocal\/api-client.svg)

This package contains a pre-configured devour-client for the Joblocal api
[Devour](https://github.com/twg/devour) - Api client for JSON-Api-Specification compliant resource handling
[Documentation]('https://joblocal.api-docs.io/') - Api Documentation

## Requirements
- Yarn or npm

## Installation
Using yarn:
```sh
$ yarn add @joblocal/api-client
```

Using npm:
```sh
$ npm install @joblocal/api-client
```

## Usage
After installing the package you can use it as follows.

```javascript
import createClient from '@joblocal/api-client';

const client = createClient({
  url: 'https://api.joblocal.de/v4',
  token: 'user_id_token'
    || () => 'id_token'
    || async () => 'id_token'
    || null,
});
```

## Development

**Installing dependencies:**
```sh
$ yarn install
```

**Verify by running tests:**
```sh
$ yarn test
```

## Built with
* [Devour](https://github.com/twg/devour) - Api client for JSON-Api-Specification compliant resource handling
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management
* [Webpack](https://webpack.js.org/) - Application Bundler
* [Jest](https://facebook.github.io/jest/) - Test Runner

### Also see
* [Jest Api](https://facebook.github.io/jest/docs/en/api.html)

## Contributing
Please read through our [contributing guidelines](https://github.com/joblocal/api-client/blob/master/contributing.md). Included are directions for opening issues, coding standards, and feature requests.

## Authors
* **Joblocal GmbH** - *Initial work* - [Joblocal](https://github.com/joblocal)

See also the list of [contributors](https://github.com/joblocal/api-client/contributors) who participated in this project.
