  priv.each = function(array, fn) {
    var i;
    var len = array.length;
    if ('length' in array) {
      for (i = 0; i < len; i++) {
        fn.call(this, array[i], i, array);
      }
    } else {
      for (i in array) {
        fn.call(this, array[i], i, array);
      }
    }
  };

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

  priv.expectAllMembers = function(assertion) {
    return priv.all.call(this, this.actual, function(item) {
      return matchers[assertion].call({
        actual: item
      });
    });
  };

  /**
   * Assert subject is of type
   * @param  {Mixed} subject
   * @param  {String} type
   * @return {Boolean}
   */

  priv.is = function(subject, type) {
    return Object.prototype.toString.call(subject) === '[object ' + type + ']';
  };

  /**
   * Assert subject is an HTML Element with the given node type
   * @return {Boolean}
   */

  priv.isHtmlElementOfType = function(subject, type) {
    return subject && subject.nodeType === type;
  };

  /**
   * Convert Array-like Object to true Array
   * @param  {Mixed[]} list
   * @return {Array}
   */

  priv.toArray = function (list) {
    return [].slice.call(list);
  };
