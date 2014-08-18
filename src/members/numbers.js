  /**
   * @module NumberMembers
   */

  /**
   * @alias
   * module:NumberMembers.toHaveNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveNumberWithinRange
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Number} floor
   * @param  {Number} ceiling
   * @return {Boolean}
   */
  matchers.toHaveNumberWithinRange = function(memberName, floor, ceiling) {
    return priv.assertMember.call(this, 'toBeWithinRange', memberName, floor, ceiling);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveCalculable
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveEvenNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveOddNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveWholeNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };
