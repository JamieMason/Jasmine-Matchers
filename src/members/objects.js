  /**
   * @module ObjectMembers
   */

  /**
   * @alias
   * module:ObjectMembers.toHaveMethod
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a Function.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object with
   * no instance members.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveNonEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object with
   * at least one instance member.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveMember
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is of any value,
   * including undefined.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
  };
