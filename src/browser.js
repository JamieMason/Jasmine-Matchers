/**
 * @file Browser
 *
 * @description
 * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
 */

/**
 * @alias
 * expect(window):toBeWindow
 *
 * @summary
 * Assert subject is a browser Window global, whether that be the parent window or those
 * created within iframes or other windows.
 *
 * @return {Boolean}
 */
matchers.toBeWindow = function() {
  return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
};

/**
 * @alias
 * expect(document):toBeDocument
 *
 * @summary
 * Assert subject is a browser Window global, whether that be the parent window or those
 * created within iframes or other windows.
 *
 * @return {Boolean}
 */
matchers.toBeDocument = function() {
  return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
};

/**
 * @alias
 * expect(htmlElement):toBeHtmlNode
 *
 * @summary
 * Assert subject is an HTML Element.
 *
 * @return {Boolean}
 */
matchers.toBeHtmlNode = function() {
  return priv.isHtmlElementOfType(this.actual, 1);
};

/**
 * @alias
 * expect(htmlElement):toBeHtmlTextNode
 *
 * @summary
 * Assert subject is an HTML Text Element.
 *
 * @return {Boolean}
 */
matchers.toBeHtmlTextNode = function() {
  return priv.isHtmlElementOfType(this.actual, 3);
};

/**
 * @alias
 * expect(htmlElement):toBeHtmlCommentNode
 *
 * @summary
 * Assert subject is an HTML Comment Element.
 *
 * @return {Boolean}
 */
matchers.toBeHtmlCommentNode = function() {
  return priv.isHtmlElementOfType(this.actual, 8);
};
