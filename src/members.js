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
   * @inner
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

  var memberMatchers = [];

  // Generate expect(object).toHave* matchers from existing .toBe* methods.
  priv.each(matchers, function(el, matcherName) {
    if (matcherName.search(/^toBe/) !== -1) {
      memberMatchers.push({
        name: matcherName.replace(/^toBe/, 'toHave'),
        matcher: assertMember(matcherName)
      });
    }
  });

  // Apply expect(object).toHave* matchers from existing .toBe* methods.
  priv.each(memberMatchers, function(el) {
    matchers[el.name] = el.matcher;
  });

  /**
   * Assert subject is an Object containing a function at memberName.
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = assertMember('toBeFunction');

  /**
   * Assert subject is an Object containing a member at memberName of any value.
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && matchers.toBeObject.call(this) && memberName in this.actual;
  };
