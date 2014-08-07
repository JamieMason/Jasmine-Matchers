  // Browser
  // ---------------------------------------------------------------------------

  /**
   * @name toBeWindow
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @name toBeDocument
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @name toBeHtmlNode
   *
   * @description
   * Assert subject is an HTML Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @name toBeHtmlTextNode
   *
   * @description
   * Assert subject is an HTML Text Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @name toBeHtmlCommentNode
   *
   * @description
   * Assert subject is an HTML Comment Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };

  // Browser Members
  // ---------------------------------------------------------------------------

  /**
   * @name toBeHtmlNode
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is an HTML Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };
