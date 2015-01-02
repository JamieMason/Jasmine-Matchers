// Create adapters for the original matchers so they can be compatible with Jasmine 2.0.
var matchersV2 = priv.adaptMatchers(matchers);

beforeEach(function() {
  if (typeof this.addMatchers === 'function') {
    this.addMatchers(matchers);
  } else if (typeof jasmine.addMatchers === 'function') {
    jasmine.addMatchers(matchersV2);
  }
});
