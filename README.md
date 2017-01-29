# Jasmine-Matchers

[![NPM version](http://img.shields.io/npm/v/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect)
[![NPM downloads](http://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/Jasmine-Matchers)
[![Build Status](http://img.shields.io/travis/JamieMason/Jasmine-Matchers/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/Jasmine-Matchers)
[![Dependency Status](http://img.shields.io/david/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://david-dm.org/JamieMason/Jasmine-Matchers)
[![Join the chat at https://gitter.im/JamieMason/Jasmine-Matchers](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/Jasmine-Matchers)
[![Code Climate](https://img.shields.io/codeclimate/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/jasmine-matchers?flat&useReferer)](https://github.com/igrigorik/ga-beacon)

|**What**|A huge library of test matchers for a range of common use-cases, compatible with all versions of [Jasmine](http://jasmine.github.io/) and [Jest](http://facebook.github.io/jest/).|
|---|:---|
|**Why**|Custom Matchers make tests easier to read and produce relevant and useful messages when they fail.|
|**How**|By avoiding vague messages such as _"expected false to be true"_ in favour of useful cues such as _"expected 3 to be even number"_ and avoiding implementation noise such as `expect(cycleWheels % 2 === 0).toEqual(true)` in favour of simply stating that you `expect(cycleWheels).toBeEvenNumber()`.|

> Jasmine Matchers is written using the [add-matchers](https://github.com/JamieMason/add-matchers) library. If you have some useful matchers of your own that you could share with other Jest and Jasmine users, please give it a try.

## Sponsors

<a href="https://browserstack.com"><img alt="Sponsored by BrowserStack" src="https://cdn.rawgit.com/JamieMason/Jasmine-Matchers/develop/browserstack.svg" height="40" /></a>

## Contents

* [Installation](#installation)
* [Matchers](#matchers)
  * [Jasmine's Default Matchers](#jasmines-default-matchers)
  * [Arrays](#arrays)
  * [Booleans](#booleans)
  * [Dates](#dates)
  * [Functions and Errors](#functions-and-errors)
  * [Numbers](#numbers)
  * [Strings](#strings)
  * [Objects](#objects)
  * [Regular Expressions](#regular-expressions)
  * [Members, Properties, Methods](#members-properties-methods)
* [Asymmetric Matchers](#asymmetric-matchers)
  * [Jasmine's Default Asymmetric Matchers](#jasmines-default-asymmetric-matchers)
  * [Arrays](#arrays-1)
  * [Dates](#dates-1)
  * [Numbers](#numbers-1)
  * [Strings](#strings-1)
  * [Objects](#objects-1)
* [Integration](#integration)
  * [Browser](#browser)
  * [Jest](#jest)
  * [Karma](#karma)
  * [Node.js](#nodejs)
  * [Sublime Text](#sublime-text)
  * [Tern](#tern)
* [Browser Support](#browser-support)

## Installation

| Platform | Instructions |
|:---------|:-------------|
| npm      | `npm install jasmine-expect --save-dev` |
| Bower    | `bower install jasmine-expect --save-dev` |
| Manual   | Downloads are available on the [releases](releases) page. |

<!-- ## Integration

| Platform | Instructions |
|:---------|:-------------|
| Browser | Embed [jasmine-matchers.js](blob/master/dist/jasmine-matchers.js) after Jasmine but before your tests. |
| Jest | See [Jest Integration](#jest-integration) |
| Karma | Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin. |
| Node.js | See [Node.js Integration](#node-js-integration) |
Sublime Text | [Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets) or [Jasmine-Matchers-ES6-Snippets](https://github.com/JamieMason/Jasmine-Matchers-ES6-Snippets) can be installed with [Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets) to ease development with Jasmine Matchers in Sublime Text.
| Tern | There is a [Plugin](https://github.com/ik9999/tern-jasminematchers) for [Tern](https://github.com/ternjs/tern) to auto-complete matchers in your Text Editor. |
 -->

## Matchers

### Jasmine's Default Matchers

The [Jasmine testing framework](http://jasmine.github.io/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](http://jasmine.github.io/edge/introduction.html#section-Expectations);

```javascript
expect(array).toContain(member);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);
```

### Arrays

Matcher | Example
:-------|:-------
[toBeArray](blob/master/test/toBeArray.spec.js) | `expect(array).toBeArray();`
[toBeArrayOfBooleans](blob/master/test/toBeArrayOfBooleans.spec.js) | `expect(array).toBeArrayOfBooleans();`
[toBeArrayOfNumbers](blob/master/test/toBeArrayOfNumbers.spec.js) | `expect(array).toBeArrayOfNumbers();`
[toBeArrayOfObjects](blob/master/test/toBeArrayOfObjects.spec.js) | `expect(array).toBeArrayOfObjects();`
[toBeArrayOfSize](blob/master/test/toBeArrayOfSize.spec.js) | `expect(array).toBeArrayOfSize(number);`
[toBeArrayOfStrings](blob/master/test/toBeArrayOfStrings.spec.js) | `expect(array).toBeArrayOfStrings();`
[toBeEmptyArray](blob/master/test/toBeEmptyArray.spec.js) | `expect(array).toBeEmptyArray();`
[toBeNonEmptyArray](blob/master/test/toBeNonEmptyArray.spec.js) | `expect(array).toBeNonEmptyArray();`

### Booleans

Matcher | Example
:-------|:-------
[toBeBoolean](blob/master/test/toBeBoolean.spec.js) | `expect(boolean).toBeBoolean();`
[toBeFalse](blob/master/test/toBeFalse.spec.js) | `expect(boolean).toBeFalse();`
[toBeTrue](blob/master/test/toBeTrue.spec.js) | `expect(boolean).toBeTrue();`

### Dates

Matcher | Example
:-------|:-------
[toBeAfter](blob/master/test/toBeAfter.spec.js) | `expect(date).toBeAfter(date);`
[toBeBefore](blob/master/test/toBeBefore.spec.js) | `expect(date).toBeBefore(date);`
[toBeDate](blob/master/test/toBeDate.spec.js) | `expect(date).toBeDate();`

### Functions and Errors

Matcher | Example
:-------|:-------
[toBeFunction](blob/master/test/toBeFunction.spec.js) | `expect(fn).toBeFunction();`
[toThrowAnyError](blob/master/test/toThrowAnyError.spec.js) | `expect(fn).toThrowAnyError();`
[toThrowErrorOfType](blob/master/test/toThrowErrorOfType.spec.js) | `expect(fn).toThrowErrorOfType(constructorName);`

### Numbers

Matcher | Example
:-------|:-------
[toBeCalculable](blob/master/test/toBeCalculable.spec.js) | `expect(mixed).toBeCalculable();`
[toBeEvenNumber](blob/master/test/toBeEvenNumber.spec.js) | `expect(number).toBeEvenNumber();`
[toBeGreaterThanOrEqualTo](blob/master/test/toBeGreaterThanOrEqualTo.spec.js) | `expect(number).toBeGreaterThanOrEqualTo(number);`
[toBeLessThanOrEqualTo](blob/master/test/toBeLessThanOrEqualTo.spec.js) | `expect(number).toBeLessThanOrEqualTo(number);`
[toBeNumber](blob/master/test/toBeNumber.spec.js) | `expect(number).toBeNumber();`
[toBeOddNumber](blob/master/test/toBeOddNumber.spec.js) | `expect(number).toBeOddNumber();`
[toBeWholeNumber](blob/master/test/toBeWholeNumber.spec.js) | `expect(number).toBeWholeNumber();`
[toBeWithinRange](blob/master/test/toBeWithinRange.spec.js) | `expect(number).toBeWithinRange(floor, ceiling);`

### Strings

Matcher | Example
:-------|:-------
[toBeEmptyString](blob/master/test/toBeEmptyString.spec.js) | `expect(string).toBeEmptyString();`
[toBeHtmlString](blob/master/test/toBeHtmlString.spec.js) | `expect(string).toBeHtmlString();`
[toBeIso8601](blob/master/test/toBeIso8601.spec.js) | `expect(string).toBeIso8601();`
[toBeJsonString](blob/master/test/toBeJsonString.spec.js) | `expect(string).toBeJsonString();`
[toBeLongerThan](blob/master/test/toBeLongerThan.spec.js) | `expect(string).toBeLongerThan();`
[toBeNonEmptyString](blob/master/test/toBeNonEmptyString.spec.js) | `expect(string).toBeNonEmptyString();`
[toBeSameLengthAs](blob/master/test/toBeSameLengthAs.spec.js) | `expect(string).toBeSameLengthAs();`
[toBeShorterThan](blob/master/test/toBeShorterThan.spec.js) | `expect(string).toBeShorterThan();`
[toBeString](blob/master/test/toBeString.spec.js) | `expect(string).toBeString();`
[toBeWhitespace](blob/master/test/toBeWhitespace.spec.js) | `expect(string).toBeWhitespace();`
[toEndWith](blob/master/test/toEndWith.spec.js) | `expect(string).toEndWith(string);`
[toStartWith](blob/master/test/toStartWith.spec.js) | `expect(string).toStartWith(string);`

### Objects

Matcher | Example
:-------|:-------
[toBeEmptyObject](blob/master/test/toBeEmptyObject.spec.js) | `expect(object).toBeEmptyObject();`
[toBeNonEmptyObject](blob/master/test/toBeNonEmptyObject.spec.js) | `expect(object).toBeNonEmptyObject();`
[toBeObject](blob/master/test/toBeObject.spec.js) | `expect(object).toBeObject();`

### Regular Expressions

Matcher | Example
:-------|:-------
[toBeRegExp](blob/master/test/toBeRegExp.spec.js) | `expect(regexp).toBeRegExp();`


### Members, Properties, Methods

Matcher | Example
:-------|:-------
[toHaveArray](blob/master/test/toHaveArray.spec.js) | `expect(object).toHaveArray(memberName);`
[toHaveArrayOfBooleans](blob/master/test/toHaveArrayOfBooleans.spec.js) | `expect(object).toHaveArrayOfBooleans(memberName);`
[toHaveArrayOfNumbers](blob/master/test/toHaveArrayOfNumbers.spec.js) | `expect(object).toHaveArrayOfNumbers(memberName);`
[toHaveArrayOfObjects](blob/master/test/toHaveArrayOfObjects.spec.js) | `expect(object).toHaveArrayOfObjects(memberName);`
[toHaveArrayOfSize](blob/master/test/toHaveArrayOfSize.spec.js) | `expect(object).toHaveArrayOfSize(memberName, size);`
[toHaveArrayOfStrings](blob/master/test/toHaveArrayOfStrings.spec.js) | `expect(object).toHaveArrayOfStrings(memberName);`
[toHaveBoolean](blob/master/test/toHaveBoolean.spec.js) | `expect(object).toHaveBoolean(memberName);`
[toHaveCalculable](blob/master/test/toHaveCalculable.spec.js) | `expect(object).toHaveCalculable(memberName);`
[toHaveDate](blob/master/test/toHaveDate.spec.js) | `expect(object).toHaveDate(memberName);`
[toHaveDateAfter](blob/master/test/toHaveDateAfter.spec.js) | `expect(object).toHaveDateAfter(memberName, date);`
[toHaveDateBefore](blob/master/test/toHaveDateBefore.spec.js) | `expect(object).toHaveDateBefore(memberName, date);`
[toHaveEmptyArray](blob/master/test/toHaveEmptyArray.spec.js) | `expect(object).toHaveEmptyArray(memberName);`
[toHaveEmptyObject](blob/master/test/toHaveEmptyObject.spec.js) | `expect(object).toHaveEmptyObject(memberName);`
[toHaveEmptyString](blob/master/test/toHaveEmptyString.spec.js) | `expect(object).toHaveEmptyString(memberName);`
[toHaveEvenNumber](blob/master/test/toHaveEvenNumber.spec.js) | `expect(object).toHaveEvenNumber(memberName);`
[toHaveFalse](blob/master/test/toHaveFalse.spec.js) | `expect(object).toHaveFalse(memberName);`
[toHaveHtmlString](blob/master/test/toHaveHtmlString.spec.js) | `expect(object).toHaveHtmlString(memberName);`
[toHaveIso8601](blob/master/test/toHaveIso8601.spec.js) | `expect(object).toHaveIso8601(memberName);`
[toHaveJsonString](blob/master/test/toHaveJsonString.spec.js) | `expect(object).toHaveJsonString(memberName);`
[toHaveMember](blob/master/test/toHaveMember.spec.js) | `expect(object).toHaveMember(memberName);`
[toHaveMethod](blob/master/test/toHaveMethod.spec.js) | `expect(object).toHaveMethod(memberName);`
[toHaveNonEmptyArray](blob/master/test/toHaveNonEmptyArray.spec.js) | `expect(object).toHaveNonEmptyArray(memberName);`
[toHaveNonEmptyObject](blob/master/test/toHaveNonEmptyObject.spec.js) | `expect(object).toHaveNonEmptyObject(memberName);`
[toHaveNonEmptyString](blob/master/test/toHaveNonEmptyString.spec.js) | `expect(object).toHaveNonEmptyString(memberName);`
[toHaveNumber](blob/master/test/toHaveNumber.spec.js) | `expect(object).toHaveNumber(memberName);`
[toHaveNumberWithinRange](blob/master/test/toHaveNumberWithinRange.spec.js) | `expect(object).toHaveNumberWithinRange(memberName, floor, ceiling);`
[toHaveObject](blob/master/test/toHaveObject.spec.js) | `expect(object).toHaveObject(memberName);`
[toHaveOddNumber](blob/master/test/toHaveOddNumber.spec.js) | `expect(object).toHaveOddNumber(memberName);`
[toHaveString](blob/master/test/toHaveString.spec.js) | `expect(object).toHaveString(memberName);`
[toHaveStringLongerThan](blob/master/test/toHaveStringLongerThan.spec.js) | `expect(object).toHaveStringLongerThan(memberName, string);`
[toHaveStringSameLengthAs](blob/master/test/toHaveStringSameLengthAs.spec.js) | `expect(object).toHaveStringSameLengthAs(memberName, string);`
[toHaveStringShorterThan](blob/master/test/toHaveStringShorterThan.spec.js) | `expect(object).toHaveStringShorterThan(memberName, string);`
[toHaveTrue](blob/master/test/toHaveTrue.spec.js) | `expect(object).toHaveTrue(memberName);`
[toHaveWhitespaceString](blob/master/test/toHaveWhitespaceString.spec.js) | `expect(object).toHaveWhitespaceString(memberName);`
[toHaveWholeNumber](blob/master/test/toHaveWholeNumber.spec.js) | `expect(object).toHaveWholeNumber(memberName);`

## Asymmetric Matchers

### Jasmine's Default Asymmetric Matchers

The [Jasmine testing framework](http://jasmine.github.io/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of asymmetric matchers](http://jasmine.github.io/2.4/introduction.html#section-Matching_Anything_with_<code>jasmine.any</code>);

```javascript
jasmine.any(Constructor);
jasmine.anything(mixed);
jasmine.arrayContaining(mixed);
jasmine.objectContaining(mixed);
jasmine.stringMatching(pattern);
```

### Arrays

Matcher | Example
:-------|:-------
[any.arrayOfBooleans](blob/master/test/arrayOfBooleans.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfBooleans());`
[any.arrayOfNumbers](blob/master/test/arrayOfNumbers.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfNumbers());`
[any.arrayOfObjects](blob/master/test/arrayOfObjects.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfObjects());`
[any.arrayOfSize](blob/master/test/arrayOfSize.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfSize(number));`
[any.arrayOfStrings](blob/master/test/arrayOfStrings.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfStrings());`
[any.emptyArray](blob/master/test/emptyArray.spec.js) | `expect(spy).toHaveBeenCalledWith(any.emptyArray());`
[any.nonEmptyArray](blob/master/test/nonEmptyArray.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyArray());`

### Dates

Matcher | Example
:-------|:-------
[any.after](blob/master/test/after.spec.js) | `expect(spy).toHaveBeenCalledWith(any.after(date));`
[any.before](blob/master/test/before.spec.js) | `expect(spy).toHaveBeenCalledWith(any.before(date));`

### Numbers

Matcher | Example
:-------|:-------
[any.calculable](blob/master/test/calculable.spec.js) | `expect(spy).toHaveBeenCalledWith(any.calculable());`
[any.evenNumber](blob/master/test/evenNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.evenNumber());`
[any.greaterThanOrEqualTo](blob/master/test/greaterThanOrEqualTo.spec.js) | `expect(spy).toHaveBeenCalledWith(any.greaterThanOrEqualTo(number));`
[any.lessThanOrEqualTo](blob/master/test/lessThanOrEqualTo.spec.js) | `expect(spy).toHaveBeenCalledWith(any.lessThanOrEqualTo(number));`
[any.oddNumber](blob/master/test/oddNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.oddNumber());`
[any.wholeNumber](blob/master/test/wholeNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.wholeNumber());`
[any.withinRange](blob/master/test/withinRange.spec.js) | `expect(spy).toHaveBeenCalledWith(any.withinRange(floor, ceiling));`

### Strings

Matcher | Example
:-------|:-------
[any.endingWith](blob/master/test/endingWith.spec.js) | `expect(spy).toHaveBeenCalledWith(any.endingWith(string));`
[any.iso8601](blob/master/test/iso8601.spec.js) | `expect(spy).toHaveBeenCalledWith(any.iso8601());`
[any.jsonString](blob/master/test/jsonString.spec.js) | `expect(spy).toHaveBeenCalledWith(any.jsonString());`
[any.longerThan](blob/master/test/longerThan.spec.js) | `expect(spy).toHaveBeenCalledWith(any.longerThan(string));`
[any.nonEmptyString](blob/master/test/nonEmptyString.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyString());`
[any.sameLengthAs](blob/master/test/sameLengthAs.spec.js) | `expect(spy).toHaveBeenCalledWith(any.sameLengthAs(string));`
[any.shorterThan](blob/master/test/shorterThan.spec.js) | `expect(spy).toHaveBeenCalledWith(any.shorterThan(string));`
[any.startingWith](blob/master/test/startingWith.spec.js) | `expect(spy).toHaveBeenCalledWith(any.startingWith(string));`
[any.whitespace](blob/master/test/whitespace.spec.js) | `expect(spy).toHaveBeenCalledWith(any.whitespace());`

### Objects

Matcher | Example
:-------|:-------
[any.emptyObject](blob/master/test/emptyObject.spec.js) | `expect(spy).toHaveBeenCalledWith(any.emptyObject());`
[any.nonEmptyObject](blob/master/test/nonEmptyObject.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyObject());`

### Regular Expressions

Matcher | Example
:-------|:-------
[any.regExp](blob/master/test/regExp.spec.js) | `expect(spy).toHaveBeenCalledWith(any.regExp());`

## Integration

### Browser

Embed [jasmine-matchers.js](blob/master/dist/jasmine-matchers.js) after Jasmine but before your tests.

### Jest

Include the following in your `package.json`;

```json
"unmockedModulePathPatterns": ["jasmine-expect"]
```

And the following at the top of your test suite;

```javascript
import JasmineExpect from 'jasmine-expect';
```

### Karma

Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin.

### Node.js

Use the [Jasmine CLI](https://www.npmjs.com/package/jasmine) and include the path to where Jasmine Matchers is installed in the `helpers` array of your `spec/support/jasmine.json`.

```json
{
  "spec_dir": "spec",
  "spec_files": ["../src/**/*.spec.js"],
  "helpers": ["../node_modules/jasmine-expect/index.js"],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```

### Sublime Text

[Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets) or [Jasmine-Matchers-ES6-Snippets](https://github.com/JamieMason/Jasmine-Matchers-ES6-Snippets) can be installed with [Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets) to ease development with Jasmine Matchers in Sublime Text.

### Tern

There is a [Plugin](https://github.com/ik9999/tern-jasminematchers) for [Tern](https://github.com/ternjs/tern) to auto-complete matchers in your Text Editor.

## Browser Support

Jasmine-Matchers is tested on [Travis CI](https://travis-ci.org/JamieMason/Jasmine-Matchers) and [BrowserStack](https://browserstack.com) against the following environments.

Browser | Version Range
:-------|-------------:
Android | 4.0 - 5.1
Chrome | 26 - 52
Firefox | 4 - 48
Internet Explorer | 9 - Edge
iOS | 6.0 - 9.3*
Opera | 11 - 12
Safari | 6 - 9*

\* Safari 5.1 and iOS 5.1 are actually fully supported except for `toBeIso8601`.
