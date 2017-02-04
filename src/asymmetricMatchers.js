// modules
const reduce = require('./lib/reduce');
const api = require('./api');

// public
module.exports = reduce(api.asymmetricMatcher, register, {});

// implementation
function register(any, asymMatcher) {
  const matcher = api.matcher[asymMatcher.matcher];
  any[asymMatcher.name] = createFactory(matcher);
  return any;
}

function createFactory(matcher) {
  return function (...args) {
    return {
      asymmetricMatch(actual) {
        const clone = args.slice();
        clone.push(actual);
        return matcher.apply(this, clone);
      }
    };
  };
}
