/**
 * @alias    toBeWindow
 * @summary  <code>expect(window).toBeWindow();</code>
 */
matchers.toBeWindow = function() {
  return this.actual &&
    typeof this.actual === 'object' &&
    this.actual.window === this.actual;
};

/**
 * @alias    toBeDocument
 * @summary  <code>expect(document).toBeDocument();</code>
 */
matchers.toBeDocument = function() {
  return this.actual &&
    typeof this.actual === 'object' &&
    this.actual instanceof window.Document;
};

/**
 * @alias    toBeHtmlNode
 * @summary  <code>expect(htmlElement).toBeHtmlNode();</code>
 */
matchers.toBeHtmlNode = function() {
  return priv.isHtmlElementOfType(this.actual, 1);
};

/**
 * @alias    toBeHtmlTextNode
 * @summary  <code>expect(htmlElement).toBeHtmlTextNode();</code>
 */
matchers.toBeHtmlTextNode = function() {
  return priv.isHtmlElementOfType(this.actual, 3);
};

/**
 * @alias    toBeHtmlCommentNode
 * @summary  <code>expect(htmlElement).toBeHtmlCommentNode();</code>
 */
matchers.toBeHtmlCommentNode = function() {
  return priv.isHtmlElementOfType(this.actual, 8);
};
