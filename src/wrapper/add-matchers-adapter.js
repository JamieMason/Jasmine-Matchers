  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.

  var isJasmineV1 = typeof this.addMatchers === 'function';
  var isJasmineV2 = typeof jasmine.addMatchers === 'function';
  var v2Matchers = {};

  if (isJasmineV1) {
    this.addMatchers(matchers);
  } else if (isJasmineV2) {
    priv.each(matchers, function(fn, matcherName) {
      v2Matchers[matcherName] = function(util) {
        return {
          compare: function(actual /*, expected, ...*/ ) {

            var message;
            var memberName;
            var args = priv.toArray(arguments).slice(1);
            var pass = matchers[matcherName].apply({
              actual: actual
            }, args);

            if (matcherName.search(/^toHave/) !== -1) {
              memberName = args.shift();
              message = util.buildFailureMessage.apply(null, [matcherName, pass, actual].concat(args));
              message = message.replace('Expected', 'Expected member "' + memberName + '" of');
              message = message.replace(' to have ', ' to be ');
            } else {
              message = util.buildFailureMessage.apply(null, [matcherName, pass, actual].concat(args));
            }

            return {
              pass: pass,
              message: message
            };

          }
        };
      };
    });
    jasmine.addMatchers(v2Matchers);
  }
