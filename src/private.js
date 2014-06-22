  /**
   * @inner
   * @param  {Array} array
   * @param  {Function} fn
   */
  priv.each = function(array, fn) {
    var i;
    var len = array.length;
    if ('length' in array) {
      for (i = 0; i < len; i++) {
        fn.call(this, array[i], i, array);
      }
    } else {
      for (i in array) {
        if (array.hasOwnProperty(i)) {
          fn.call(this, array[i], i, array);
        }
      }
    }
  };

  /**
   * @inner
   * @param  {Array} array
   * @param  {Function} fn
   * @param  {*} memo
   * @return {*} memo
   */
  priv.reduce = function(array, fn, memo) {
    priv.each.call(this, array, function(el, ix, list) {
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
   * @param  {Array} array
   * @param  {Function} fn
   * @return {Boolean}
   */
  priv.some = function(array, fn) {
    var i;
    var len = array.length;
    for (i = 0; i < len; i++) {
      if (fn.call(this, array[i], i, array) === true) {
        return true;
      }
    }
    return false;
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
    return subject && subject.nodeType === type;
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
   * @return {Function}
   */
  priv.assertMember = function(matcherName) {
    return function() {
      var args = priv.toArray(arguments);
      var memberName = args.shift();
      return matchers.toBeObject.call(this) && matchers[matcherName].apply({
        actual: this.actual[memberName]
      }, args);
    };
  };
