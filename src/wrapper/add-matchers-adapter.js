if (typeof jasmine.addMatchers === 'function') {

  // Create adapters for the original matchers so
  // they can be compatible with Jasmine 2.0.
  var matchersV2 = priv.adaptMatchers(matchers);

  beforeEach(function() {
    jasmine.addMatchers(matchersV2);
  });

} else {

  beforeEach(function() {
    this.addMatchers(matchers);
  });

}
