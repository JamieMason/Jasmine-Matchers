/**
 * @alias    toThrowAnyError
 * @summary  <code>expect(function).toThrowAnyError();</code>
 */
matchers.toThrowAnyError = function() {
  var threwError = false;
  try {
    this.actual();
  } catch (e) {
    threwError = true;
  }
  return threwError;
};

/**
 * @alias    toThrowErrorOfType
 * @summary  <code>expect(function).toThrowErrorOfType(type:String);</code>
 */
matchers.toThrowErrorOfType = function(type) {
  var threwErrorOfType = false;
  try {
    this.actual();
  } catch (e) {
    threwErrorOfType = (e.name === type);
  }
  return threwErrorOfType;
};
