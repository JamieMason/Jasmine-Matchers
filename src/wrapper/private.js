/**
 * @inner
 * @param  {Object} object
 * @param  {Function} fn
 */
priv.each = function(object, fn) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      fn.call(this, object[key], key, object);
    }
  }
};

/**
 * @inner
 * @param  {Object} object
 * @param  {Function} fn
 * @param  {*} memo
 * @return {*} memo
 */
priv.reduce = function(object, fn, memo) {
  priv.each.call(this, object, function(el, ix, list) {
    memo = fn(memo, el, ix, list);
  });
  return memo;
};

/**
 * @inner
 * @param  {Array} array
 * @param  {Function} fn
 * @return {Boolean}
 */
priv.all = function(array, fn) {
  var i;
  var len = array.length;
  for (i = 0; i < len; i++) {
    if (fn.call(this, array[i], i, array) === false) {
      return false;
    }
  }
  return true;
};

/**
 * @inner
 * @param  {String} matcherName
 * @return {Boolean}
 */
priv.expectAllMembers = function(matcherName) {
  return priv.all.call(this, this.actual, function(item) {
    return matchers[matcherName].call({
      actual: item
    });
  });
};

/**
 * Assert subject is of type
 * @inner
 * @param  {*} subject
 * @param  {String} type
 * @return {Boolean}
 */
priv.is = function(subject, type) {
  return Object.prototype.toString.call(subject) === '[object ' + type + ']';
};

/**
 * Assert subject is an HTML Element with the given node type
 * @inner
 * @param  {*} subject
 * @param  {String} type
 * @return {Boolean}
 */
priv.isHtmlElementOfType = function(subject, type) {
  return subject &&
    subject.nodeType === type;
};

/**
 * Convert Array-like Object to true Array
 * @inner
 * @param  {*} list
 * @return {Array}
 */
priv.toArray = function(list) {
  return [].slice.call(list);
};

/**
 * @inner
 * @param  {String} matcherName
 * @param  {String} memberName
 * @return {Boolean}
 */
priv.assertMember = function( /* matcherName, memberName, ... */ ) {
  var args = priv.toArray(arguments);
  var matcherName = args.shift();
  var memberName = args.shift();
  return priv.is(this.actual, 'Object') &&
    matchers[matcherName].apply({
      actual: this.actual[memberName]
    }, args);
};

/**
 * @summary
 * Format the failure message for member matchers such as toHaveString('surname').
 *
 * @inner
 * @param  {Object}  util   Provided by Jasmine.
 * @param  {String}  name   Name of the matcher, such as toBeString.
 * @param  {Array}   args   converted arguments.
 * @param  {Boolean} pass   Whether the test passed.
 * @param  {*}       actual The expected value.
 * @return {String}         The message to display on failure.
 */
priv.formatFailMessage = function(util, name, args, pass, actual) {
  if (name.search(/^toHave/) === -1) {
    return util.buildFailureMessage.apply(null, [name, pass, actual].concat(args));
  }
  var memberName = args.shift();
  return util.buildFailureMessage.apply(null, [name, pass, actual].concat(args))
    .replace('Expected', 'Expected member "' + memberName + '" of')
    .replace(' to have ', ' to be ');
};

/**
 * @summary
 * Convert Jasmine 1.0 matchers into the format introduced in Jasmine 2.0.
 *
 * @inner
 * @param  {Object} v1Matchers
 * @return {Object} v2Matchers
 */
priv.adaptMatchers = function(v1Matchers) {
  return priv.reduce(v1Matchers, function(v2Matchers, matcher, name) {
    v2Matchers[name] = function(util) {
      return {
        compare: function(actual /*, expected, ...*/ ) {
          var args = priv.toArray(arguments).slice(1);
          var pass = matcher.apply({
            actual: actual
          }, args);
          return {
            pass: pass,
            message: priv.formatFailMessage(util, name, args, pass, actual)
          };
        }
      };
    };
    return v2Matchers;
  }, {});
};
