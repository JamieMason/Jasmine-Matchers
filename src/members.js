  // Members
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is an Object containing an Array at memberName
   * @name toHaveArray
   * @param {String} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array of size at memberName
   * @name toHaveArrayOfSize
   * @param {String} memberName
   * @param {Number} size
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName with no members
   * @name toHaveEmptyArray
   * @param {String} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName with at least one member
   * @name toHaveNonEmptyArray
   * @param {String} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName where no member is not an Object
   * @name toHaveArrayOfObjects
   * @param {String} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName where no member is not a String
   * @name toHaveArrayOfStrings
   * @param {String} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName where no member is not a Number
   * @name toHaveArrayOfNumbers
   * @param {Number} memberName
   * @return {Boolean}
   */

  /**
   * Assert subject is an Object containing an Array at memberName where no member is not a Boolean
   * @name toHaveArrayOfBooleans
   * @param {Boolean} memberName
   * @return {Boolean}
   */

  /**
   * @param  {String} matcherName
   * @return {Function}
   */

  function assertMember(matcherName) {
    return function() {
      var args = priv.toArray(arguments);
      var memberName = args.shift();
      return matchers.toBeObject.call(this) && matchers[matcherName].apply({
        actual: this.actual[memberName]
      }, args);
    };
  }

  priv.each([
    'Array',
    'ArrayOfSize',
    'EmptyArray',
    'NonEmptyArray',
    'ArrayOfObjects',
    'ArrayOfStrings',
    'ArrayOfNumbers',
    'ArrayOfBooleans'
  ], function(matcherName) {
    matchers['toHave' + matcherName] = assertMember('toBe' + matcherName);
  });
