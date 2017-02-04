// 3rd party modules
const addMatchers = require('add-matchers');

// modules
const api = require('./api');
const asymmetricMatchers = require('./asymmetricMatchers');

// public
module.exports = api.matcher;

// implementation
addMatchers(api.matcher);
global.any = asymmetricMatchers;
