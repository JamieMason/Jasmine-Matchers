  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.

  var isJasmineV1 = typeof this.addMatchers === 'function';
  var isJasmineV2 = typeof jasmine.addMatchers === 'function';
  var v2Matchers = {};

  if (isJasmineV1) {
    this.addMatchers(matchers);
  } else if (isJasmineV2) {
    priv.each(matchers, function(fn, name) {
      v2Matchers[name] = function() {
        return {
          compare: function(actual, expected) {
            var args = priv.toArray(arguments);
            var scope = {
              actual: actual
            };
            args.shift();
            return {
              pass: matchers[name].apply(scope, args)
            };
          }
        };
      };
    });
    jasmine.addMatchers(v2Matchers);
  }
