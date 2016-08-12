// modules
var reduce = require('./lib/reduce');
var api = require('./api');

// public
module.exports = reduce(api.asymmetricMatcher, register, {});

// implementation
function register(any, asymMatcher) {
  var matcher = api.matcher[asymMatcher.matcher];
  any[asymMatcher.name] = createFactory(matcher);
  return any;
}

function createFactory(matcher) {
  return function asymmetricMatcherFactory() {
    var args = [].slice.call(arguments);
    return {
      asymmetricMatch: function asymmetricMatcher(actual) {
        var clone = args.slice();
        clone.push(actual);
        return matcher.apply(this, clone);
      }
    };
  };
}
