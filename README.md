# JavaScript Tempo API Client for node.js

[![Tempo Rest API](https://img.shields.io/badge/Tempo%20Rest%20API--green.svg)](https://apidocs.tempo.io/)

An unofficial node.js wrapper for the [Tempo REST API V4](https://apidocs.tempo.io/).

The repo aims to be similar in usage to the [tempo-client](https://www.npmjs.com/package/tempo-client).

## Installation

Install using [NPM](https://npmjs.org):

```shell
$ npm install @adiacentlib/tempoclient4
```

## Examples

### Instantiating the client

The `bearerToken` can be retrieved in two ways; Either as an individual user (useful for running personal reports and
basic tests), or as an application developer (Useful for developing apps that seamlessly integrate with Tempo).
Please see the sections _"Using the REST API as an individual user"_ or 
_"Using the REST API as an application developer"_ in [Tempo's documentation](https://apidocs.tempo.io).

**Note that the bearer token for Tempo IS NOT the same as the token generated in Jira.**

```javascript
// ES5
const TempoApi = require('@adiacentlib/tempoclient4');

// ES6
import TempoApi from '@adiacentlib/tempoclient4';

const tempo = new TempoApi({
  bearerToken: 'token',
})
```

### Getting worklogs for a JIRA user

```javascript
const user = {
  accountId: '1111aaaa2222bbbb3333cccc'
};
const dateRange = {
  from: '2019-10-07',
  to: '2019-10-11'
};

// ES6
const worklogs = tempo.worklogs.getWorklogsByUser(user.accountId, dateRange.from, dateRange.to)
  .then(worklogs => {
    console.log(worklogs.results);
  })
  .catch(err => {
    console.log(err);
  });

// ES7
async function getWorklogsForUser(user, from, to) {
  try {
    const worklogs = (await tempo.worklogs.getWorklogsByUser(user.accountId, from, to )).body;
    console.log(worklogs.results);
  } catch (err) {
    console.log(err);
  }
}
```

### Create, modify, delete an "Account"

```js
// Create a new account using `.post(...)`
let account = {
  key: 'CLOUDBAY_DEVELOPMENT',
  name: 'Cloudbay: Development',
  status: 'OPEN',
  leadAccountId: "123456:01234567-89ab-cdef-0123-456789abcdef"
};

let accountId = (await tempo.accounts.createAccount(account)).body.id;
console.log(`Account "${account.key}" has an id of: ${accountId}`);

// Modify the account using `.putAccount(...)`
account.status = 'CLOSED'
const accountOnTempo = (await tempo.accounts.updateAccount(account.key, account)).body;
console.log(`Account "${account.key}" is now: ${accountOnTempo.status}`);

// Delete the account using `.deleteAccount(...)`
await tempo.accounts.deleteAccount(account.key);

// `.getAccount(...)` will throw an error now that the account is deleted
try {
  await tempo.accounts.getAccountById(accountId);
} catch (err) {
  console.log(`Account "${account.key}" no longer exists!`);
}
```

## Documentation

### REST API

All endpoints listed in the Tempo REST API (https://apidocs.tempo.io/)
for the Version 4 REST API are implemented as of January 2025. The REST API documentation will answer most questions about the expected structure of data.

### The Tempo Client itself

It's strongly recommended to use TypeScript as code completion will help quite
a bit with navigating the client, object with typing check.

