# Jasmine-Matchers

> Write Beautiful Specs with Custom Matchers for Jest and Jasmine

[![NPM version](http://img.shields.io/npm/v/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect)
[![NPM downloads](http://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect)
[![Build Status](http://img.shields.io/travis/JamieMason/Jasmine-Matchers/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/Jasmine-Matchers)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b2cd248837df1409c4d/maintainability)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers/maintainability)
[![Gitter Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/Jasmine-Matchers)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/foldleft)
[![Backers](https://opencollective.com/fold_left/backers/badge.svg)](https://opencollective.com/fold_left#backer)
[![Sponsors](https://opencollective.com/fold_left/sponsors/badge.svg)](https://opencollective.com/fold_left#sponsors)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/jasmine-matchers?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

[Overview](#overview) | [Installation](#installation) | [Matchers](#matchers) |
[Asymmetric Matchers](#asymmetric-matchers) | [Integration](#integration) |
[Browser Support](#browser-support)

## Overview

##### What

A huge library of test matchers for a range of common use-cases, compatible with
all versions of [Jasmine](http://jasmine.github.io/) and
[Jest](http://facebook.github.io/jest/).

##### Why

Custom Matchers make tests easier to read and produce relevant and useful
messages when they fail.

##### How

By avoiding vague messages such as _"expected false to be true"_ in favour of
useful cues such as _"expected 3 to be even number"_ and avoiding implementation
noise such as `expect(cycleWheels % 2 === 0).toEqual(true)` in favour of simply
stating that you `expect(cycleWheels).toBeEvenNumber()`.

##### Sponsors

<a href="https://browserstack.com">
  <img alt="Sponsored by BrowserStack" src="https://cdn.rawgit.com/JamieMason/Jasmine-Matchers/ad1ea0e6/browserstack.svg" height="40" />
</a>

## Installation

##### npm

```
npm install jasmine-expect --save-dev
```

##### Bower

```
bower install jasmine-expect --save-dev
```

##### Manual

Downloads are available on the
[releases](https://github.com/JamieMason/Jasmine-Matchers/releases) page.

## API

The [Jasmine testing framework](http://jasmine.github.io/) from
[Pivotal Labs](http://pivotallabs.com/) comes with this
[default set of matchers](http://jasmine.github.io/edge/introduction.html#section-Expectations):

```js
expect(instance).toBe(instance);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(mixed).toEqual(mixed);
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);
expect(mixed).toMatch(pattern);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
```

and this
[default set of asymmetric matchers](http://jasmine.github.io/2.4/introduction.html#section-Matching_Anything_with_%3Ccode%3Ejasmine.any%3C/code%3E);

```js
jasmine.any(Constructor);
jasmine.anything(mixed);
jasmine.arrayContaining(mixed);
jasmine.objectContaining(mixed);
jasmine.stringMatching(pattern);
```

## Matchers

[Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) adds the
following matchers:

```js
expect(array).toBeArray();
expect(array).toBeArrayOfBooleans();
expect(array).toBeArrayOfNumbers();
expect(array).toBeArrayOfObjects();
expect(array).toBeArrayOfSize(number);
expect(array).toBeArrayOfStrings();
expect(array).toBeEmptyArray();
expect(array).toBeNonEmptyArray();
expect(boolean).toBeBoolean();
expect(boolean).toBeFalse();
expect(boolean).toBeTrue();
expect(date).toBeAfter(otherDate);
expect(date).toBeBefore(otherDate);
expect(date).toBeDate();
expect(date).toBeValidDate();
expect(fn).toBeFunction();
expect(fn).toThrowAnyError();
expect(fn).toThrowErrorOfType(constructorName);
expect(mixed).toBeCalculable();
expect(number).toBeEvenNumber();
expect(number).toBeGreaterThanOrEqualTo(otherNumber);
expect(number).toBeLessThanOrEqualTo(otherNumber);
expect(number).toBeNear(otherNumber, epsilon);
expect(number).toBeNumber();
expect(number).toBeOddNumber();
expect(number).toBeWholeNumber();
expect(number).toBeWithinRange(floor, ceiling);
expect(object).toBeEmptyObject();
expect(object).toBeNonEmptyObject();
expect(object).toBeObject();
expect(object).toHaveArray(memberName);
expect(object).toHaveArrayOfBooleans(memberName);
expect(object).toHaveArrayOfNumbers(memberName);
expect(object).toHaveArrayOfObjects(memberName);
expect(object).toHaveArrayOfSize(memberName, size);
expect(object).toHaveArrayOfStrings(memberName);
expect(object).toHaveBoolean(memberName);
expect(object).toHaveCalculable(memberName);
expect(object).toHaveDate(memberName);
expect(object).toHaveDateAfter(memberName, date);
expect(object).toHaveDateBefore(memberName, date);
expect(object).toHaveEmptyArray(memberName);
expect(object).toHaveEmptyObject(memberName);
expect(object).toHaveEmptyString(memberName);
expect(object).toHaveEvenNumber(memberName);
expect(object).toHaveFalse(memberName);
expect(object).toHaveHtmlString(memberName);
expect(object).toHaveIso8601(memberName);
expect(object).toHaveJsonString(memberName);
expect(object).toHaveMember(memberName);
expect(object).toHaveMethod(memberName);
expect(object).toHaveNonEmptyArray(memberName);
expect(object).toHaveNonEmptyObject(memberName);
expect(object).toHaveNonEmptyString(memberName);
expect(object).toHaveNumber(memberName);
expect(object).toHaveNumberWithinRange(memberName, floor, ceiling);
expect(object).toHaveObject(memberName);
expect(object).toHaveOddNumber(memberName);
expect(object).toHaveString(memberName);
expect(object).toHaveStringLongerThan(memberName, string);
expect(object).toHaveStringSameLengthAs(memberName, string);
expect(object).toHaveStringShorterThan(memberName, string);
expect(object).toHaveTrue(memberName);
expect(object).toHaveUndefined(memberName);
expect(object).toHaveWhitespaceString(memberName);
expect(object).toHaveWholeNumber(memberName);
expect(regexp).toBeRegExp();
expect(string).toBeEmptyString();
expect(string).toBeHtmlString();
expect(string).toBeIso8601();
expect(string).toBeJsonString();
expect(string).toBeLongerThan();
expect(string).toBeNonEmptyString();
expect(string).toBeSameLengthAs();
expect(string).toBeShorterThan();
expect(string).toBeString();
expect(string).toBeWhitespace();
expect(string).toEndWith(substring);
expect(string).toStartWith(substring);
```

## Asymmetric Matchers

```js
any.after(date);
any.arrayOfBooleans();
any.arrayOfNumbers();
any.arrayOfObjects();
any.arrayOfSize(number);
any.arrayOfStrings();
any.before(date);
any.calculable();
any.emptyArray();
any.emptyObject();
any.endingWith(string);
any.evenNumber();
any.greaterThanOrEqualTo(number);
any.iso8601();
any.jsonString();
any.lessThanOrEqualTo(number);
any.longerThan(string);
any.nonEmptyArray();
any.nonEmptyObject();
any.nonEmptyString();
any.oddNumber();
any.regExp();
any.sameLengthAs(string);
any.shorterThan(string);
any.startingWith(string);
any.whitespace();
any.wholeNumber();
any.withinRange(floor, ceiling);
```

## Integration

### Browser

Embed
[jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js)
after Jasmine but before your tests.

### Jest

Include the following in your `package.json`:

```json
"unmockedModulePathPatterns": ["jasmine-expect"]
```

And the following at the top of your test suite:

```javascript
import JasmineExpect from 'jasmine-expect';
```

### Karma

Integration is easy with the
[karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers)
plugin.

### Node.js

Use the [Jasmine CLI](https://www.npmjs.com/package/jasmine) and include the
path to where Jasmine Matchers is installed in the `helpers` array of your
`spec/support/jasmine.json`.

```json
{
  "spec_dir": "spec",
  "spec_files": ["../src/**/*.spec.js"],
  "helpers": ["../node_modules/jasmine-expect/index.js"],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```

### TypeScript and Angular CLI Projects

If you are using TypeScript, you might want to
`npm install @types/jasmine-expect --save-dev` in order to prevent your IDE from
complaining about the new Matchers.

Also, if you run into TypeScript compilation errors when running your tests, add
`"jasmine-expect"` to the `"types"` array in your tests' `tsconfig` file.

As an example, for an Angular CLI based project, this would be your
`tsconfig.spec.json` file:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/spec",
    "baseUrl": "./",
    "module": "commonjs",
    "target": "es5",
    "types": ["jasmine", "node", "jasmine-expect"]
  },
  "files": ["test.ts"],
  "include": ["**/*.spec.ts", "**/*.d.ts"]
}
```

### Sublime Text

[Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets)
or
[Jasmine-Matchers-ES6-Snippets](https://github.com/JamieMason/Jasmine-Matchers-ES6-Snippets)
can be installed with
[Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets)
to ease development with Jasmine Matchers in Sublime Text.

### Tern

There is a [Plugin](https://github.com/ik9999/tern-jasminematchers) for
[Tern](https://github.com/ternjs/tern) to auto-complete matchers in your Text
Editor.

## Browser Support

Jasmine-Matchers is tested on
[Travis CI](https://travis-ci.org/JamieMason/Jasmine-Matchers) and
[BrowserStack](https://browserstack.com) against the following environments.

| Browser           | Version Range |
| :---------------- | ------------: |
| Android           |     4.0 - 5.1 |
| Chrome            |       26 - 52 |
| Firefox           |        4 - 48 |
| Internet Explorer |      9 - Edge |
| iOS               |   6.0 - 9.3\* |
| Opera             |       11 - 12 |
| Safari            |       6 - 9\* |

\* Safari 5.1 and iOS 5.1 are actually fully supported except for `toBeIso8601`.
