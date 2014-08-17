  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.

  switch (jasmineVersion) {
    case 1:
      beforeEach(function() {
        this.addMatchers(matchers);
      });
      break;
    case 2:
      beforeEach(function() {
        jasmine.addMatchers(priv.adaptMatchers(matchers));
      });
      break;
  }
