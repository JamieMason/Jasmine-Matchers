  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.

  switch (jasmineVersion) {
    case 1:
      this.addMatchers(matchers);
      break;
    case 2:
      jasmine.addMatchers(priv.adaptMatchers(matchers));
      break;
  }
