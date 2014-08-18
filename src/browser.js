  /**
   * @module Browser
   */

  /**
   * @alias
   * module:Browser.toBeWindow
   *
   * @description
   * <p>Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @alias
   * module:Browser.toBeDocument
   *
   * @description
   * <p>Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @alias
   * module:Browser.toBeHtmlNode
   *
   * @description
   * <p>Assert subject is an HTML Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @alias
   * module:Browser.toBeHtmlTextNode
   *
   * @description
   * <p>Assert subject is an HTML Text Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @alias
   * module:Browser.toBeHtmlCommentNode
   *
   * @description
   * <p>Assert subject is an HTML Comment Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };
