// 3rd party modules
var addMatchers = require('add-matchers');

// modules
var api = require('./api');
var asymmetricMatchers = require('./asymmetricMatchers');

// public
module.exports = api.matcher;

// implementation
addMatchers(api.matcher);
global.any = asymmetricMatchers;
