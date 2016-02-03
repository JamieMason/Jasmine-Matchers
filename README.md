# Jasmine-Matchers

> Readable tests.

[![Build Status](https://img.shields.io/travis/JamieMason/Jasmine-Matchers/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/Jasmine-Matchers)
[![npm downloads](https://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect)
[![Code Climate](https://img.shields.io/codeclimate/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers)
[![Coverage](https://img.shields.io/codeclimate/coverage/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/JamieMason/Jasmine-Matchers.svg?style=social)](https://twitter.com/intent/tweet?text=Additional%20matchers%20for%20the%20Jasmine%20BDD%20JavaScript%20testing%20library%20%23JavaScript%20%23NodeJS%20&url=https%3A%2F%2Fgithub.com%2FJamieMason%2FJasmine-Matchers)
[![Follow @fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social)](https://twitter.com/fold_left)
[![GitHub stars](https://img.shields.io/github/stars/JamieMason/Jasmine-Matchers.svg?style=social&label=Star)](https://github.com/JamieMason/Jasmine-Matchers)
[![GitHub followers](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)

## Contents

+ **[Purpose](#purpose)**
+ **[Installation](#installation)**: [npm](#npm), [Bower](#bower), [Manual](#manual)
+ **[Integration](#integration)**: [Browser](#browser), [Karma](#karma), [Node.js](#node-js), [Sublime Text](#sublime-text), [Tern](#tern), [Jest](#jest).
+ **[Available Matchers](#available-matchers)**: [Arrays](#arrays), [Booleans](#booleans), [Dates](#dates), [Functions and Errors](#functions-and-errors), [Numbers](#numbers), [Objects](#objects), [Strings](#strings).
+ **[Browser Test Suite](#browser-test-suite)**

## Purpose

The [Jasmine testing framework](http://jasmine.github.io/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](http://jasmine.github.io/edge/introduction.html#section-Expectations);

```javascript
expect(fn).toThrow(e);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(string).toContain(substring);
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
```

Using the default Matchers your tests and failure output might look something like this;

```javascript
it('should expose the expected API', function() {
  expect(typeof record.save).toEqual('function');
});
```

> Expected "undefined" to equal "function"

```javascript
it('should distribute evenly', function() {
  expect(basket.items % 2 === 0).toEqual(true);
});
```

> Expected false to equal true

Using [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) the same tests and failure output can be written like this;

```javascript
it('should expose the expected API', function() {
  expect(record).toHaveMethod('save');
});
```

> Expected member "save" of { save : undefined } to be function.

```javascript
it('should distribute evenly', function() {
  expect(basket).toHaveEvenNumber('items');
});
```

> Expected member "items" of { items : 25 } to be even number.

## Installation

### npm

```bash
npm install jasmine-expect --save-dev
```

### Bower

```bash
bower install jasmine-expect --save-dev
```

### Manual

Downloads are available on the [releases](https://github.com/JamieMason/Jasmine-Matchers/releases) page.

## Integration

### Browser

Include Jasmine Matchers after Jasmine but before your tests.

```html
<script src="/path/to/jasmine-matchers.js"></script>
```

### Karma

Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin.

### Node.js

When using [jasmine-node](https://github.com/mhevery/jasmine-node) 1.x, provide the path to where Jasmine Matchers is installed as the value for `--requireJsSetup`.

```bash
jasmine-node --requireJsSetup node_modules/jasmine-expect/index.js test
```

jasmine-node 2.x has no such hooks that I'm aware of for loading helpers, in this case the following call is needed before the first test in your suite.

```javascript
require('jasmine-expect');
```

### Sublime Text

[Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets) can be installed with [Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets) to ease development with Jasmine Matchers in Sublime Text.

### Tern

[Plugin](https://github.com/ik9999/tern-jasminematchers) for [Tern](https://github.com/ternjs/tern) to auto-complete matchers in supported editors.

### Jest

Jasmine Matchers can be used with Facebook's [Jest](https://facebook.github.io/jest/).

```js
// package.json
"unmockedModulePathPatterns": [
    "jasmine-expect"
],
```

```js
// some test
import JasmineExpect from 'jasmine-expect';
// ...
expect(someValue).toBeArrayOfObjects();
```

## Available Matchers

### Arrays

+ [toBeArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArray.spec.js)
+ [toBeArrayOfBooleans](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfBooleans.spec.js)
+ [toBeArrayOfNumbers](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfNumbers.spec.js)
+ [toBeArrayOfObjects](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfObjects.spec.js)
+ [toBeArrayOfSize](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfSize.spec.js)
+ [toBeArrayOfStrings](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfStrings.spec.js)
+ [toBeEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyArray.spec.js)
+ [toBeNonEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyArray.spec.js)

### Booleans

+ [toBeBoolean](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeBoolean.spec.js)
+ [toBeFalse](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeFalse.spec.js)
+ [toBeTrue](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeTrue.spec.js)

### Dates

+ [toBeAfter](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeAfter.spec.js)
+ [toBeBefore](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeBefore.spec.js)
+ [toBeDate](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeDate.spec.js)
+ [toBeIso8601](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeIso8601.spec.js)

### Functions and Errors

+ [toBeFunction](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeFunction.spec.js)
+ [toThrowAnyError](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toThrowAnyError.spec.js)
+ [toThrowErrorOfType](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toThrowErrorOfType.spec.js)

### Numbers

+ [toBeCalculable](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeCalculable.spec.js)
+ [toBeEvenNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEvenNumber.spec.js)
+ [toBeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNumber.spec.js)
+ [toBeOddNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeOddNumber.spec.js)
+ [toBeWholeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWholeNumber.spec.js)
+ [toBeWithinRange](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWithinRange.spec.js)

### Objects

+ [toBeEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyObject.spec.js)
+ [toBeNonEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyObject.spec.js)
+ [toBeObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeObject.spec.js)
+ [toHaveArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArray.spec.js)
+ [toHaveArrayOfBooleans](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfBooleans.spec.js)
+ [toHaveArrayOfNumbers](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfNumbers.spec.js)
+ [toHaveArrayOfObjects](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfObjects.spec.js)
+ [toHaveArrayOfSize](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfSize.spec.js)
+ [toHaveArrayOfStrings](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfStrings.spec.js)
+ [toHaveBoolean](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveBoolean.spec.js)
+ [toHaveCalculable](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveCalculable.spec.js)
+ [toHaveDate](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDate.spec.js)
+ [toHaveDateAfter](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDateAfter.spec.js)
+ [toHaveDateBefore](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDateBefore.spec.js)
+ [toHaveEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyArray.spec.js)
+ [toHaveEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyObject.spec.js)
+ [toHaveEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyString.spec.js)
+ [toHaveEvenNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEvenNumber.spec.js)
+ [toHaveFalse](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveFalse.spec.js)
+ [toHaveHtmlString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveHtmlString.spec.js)
+ [toHaveIso8601](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveIso8601.spec.js)
+ [toHaveJsonString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveJsonString.spec.js)
+ [toHaveMember](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveMember.spec.js)
+ [toHaveMethod](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveMethod.spec.js)
+ [toHaveNonEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyArray.spec.js)
+ [toHaveNonEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyObject.spec.js)
+ [toHaveNonEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyString.spec.js)
+ [toHaveNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNumber.spec.js)
+ [toHaveNumberWithinRange](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNumberWithinRange.spec.js)
+ [toHaveObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveObject.spec.js)
+ [toHaveOddNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveOddNumber.spec.js)
+ [toHaveString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveString.spec.js)
+ [toHaveStringLongerThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringLongerThan.spec.js)
+ [toHaveStringSameLengthAs](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringSameLengthAs.spec.js)
+ [toHaveStringShorterThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringShorterThan.spec.js)
+ [toHaveTrue](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveTrue.spec.js)
+ [toHaveWhitespaceString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveWhitespaceString.spec.js)
+ [toHaveWholeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveWholeNumber.spec.js)
+ [toImplement](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toImplement.spec.js)

### Strings

+ [toBeEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyString.spec.js)
+ [toBeHtmlString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeHtmlString.spec.js)
+ [toBeJsonString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeJsonString.spec.js)
+ [toBeLongerThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeLongerThan.spec.js)
+ [toBeNonEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyString.spec.js)
+ [toBeSameLengthAs](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeSameLengthAs.spec.js)
+ [toBeShorterThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeShorterThan.spec.js)
+ [toBeString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeString.spec.js)
+ [toBeWhitespace](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWhitespace.spec.js)
+ [toEndWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toEndWith.spec.js)
+ [toStartWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toStartWith.spec.js)

## Browser Test Suite

Jasmine-Matchers is tested on [Travis CI](https://travis-ci.org/JamieMason/Jasmine-Matchers) and [Sauce Labs](https://saucelabs.com) against the following environments.

+ Android 4.4 on Linux
+ Android 5.1 on Linux
+ Chrome 47 on Windows 10
+ Firefox 40.0 on OS X 10.10
+ Firefox 43.0 on OS X 10.10
+ IE 10 on Windows 7
+ IE 11 on Windows 8.1
+ IE 9 on Windows 7
+ iOS 8.0 on OS X 10.10
+ iOS 8.4 on OS X 10.10
+ iOS 9.2 on OS X 10.10
+ Safari 8.0 on OS X 10.10
+ Safari 9.0 on OS X 10.11
