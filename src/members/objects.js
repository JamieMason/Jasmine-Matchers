/**
 * ObjectMembers
 */

/**
 * @alias
 * expect(object):toHaveMethod
 *
 * @summary
 * Assert subject is a true Object containing a property at memberName which is a Function.
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 *
 * @param {Boolean} memberName
 * @return {Boolean}
 */
matchers.toHaveMethod = function(memberName) {
  return priv.assertMember.call(this, 'toBeFunction', memberName);
};

/**
 * @alias
 * expect(object):toHaveObject
 *
 * @summary
 * Assert subject is a true Object containing a property at memberName which is a true Object.
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 *
 * @param {Boolean} memberName
 * @return {Boolean}
 */
matchers.toHaveObject = function(memberName) {
  return priv.assertMember.call(this, 'toBeObject', memberName);
};

/**
 * @alias
 * expect(object):toHaveEmptyObject
 *
 * @summary
 * Assert subject is a true Object containing a property at memberName which is a true Object with
 * no instance members.
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 *
 * @param {Boolean} memberName
 * @return {Boolean}
 */
matchers.toHaveEmptyObject = function(memberName) {
  return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
};

/**
 * @alias
 * expect(object):toHaveNonEmptyObject
 *
 * @summary
 * Assert subject is a true Object containing a property at memberName which is a true Object with
 * at least one instance member.
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 *
 * @param {Boolean} memberName
 * @return {Boolean}
 */
matchers.toHaveNonEmptyObject = function(memberName) {
  return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
};

/**
 * @alias
 * expect(object):toHaveMember
 *
 * @summary
 * Assert subject is a true Object containing a property at memberName which is of any value,
 * including undefined.
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 *
 * @param {Boolean} memberName
 * @return {Boolean}
 */
matchers.toHaveMember = function(memberName) {
  return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
};
