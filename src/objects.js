  // Objects
  // ---------------------------------------------------------------------------

  /**
   * @inner
   *
   * @description
   * Report how many instance members the given Object has.
   *
   * @param  {Object} object
   * @return {Number}
   * @memberOf priv
   */
  priv.countMembers = function(object) {
    return priv.reduce(object, function(memo, el, ix) {
      return memo + 1;
    }, 0);
  };

  /**
   * @alias toBeObject
   *
   * @description
   * Assert subject is a true Object, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * @alias toBeEmptyObject
   *
   * @description
   * Assert subject is a true Object with no instance members.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
  };

  /**
   * @alias toBeNonEmptyObject
   *
   * @description
   * Assert subject is a true Object with at least one instance member.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
  };

  /**
   * @alias toImplement
   *
   * @description
   * Assert subject is a true Object which features at least the same keys as `other` (regardless of
   * whether it also has other members).
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param  {Object} other
   * @return {Boolean}
   */
  matchers.toImplement = function(other) {
    if (!priv.is(this.actual, 'Object') || !priv.is(other, 'Object')) {
      return false;
    }
    for (var key in other) {
      if (key in this.actual) {
        continue;
      }
      return false;
    }
    return true;
  };

  /**
   * @alias toBeFunction
   *
   * @description
   * Assert subject is a true Function, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };

  // Object Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveMethod
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a Function.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };

  /**
   * @alias toHaveObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  /**
   * @alias toHaveEmptyObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * no instance members.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * @alias toHaveNonEmptyObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * at least one instance member.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  /**
   * @alias toHaveMember
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is of any value,
   * including undefined.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
  };
