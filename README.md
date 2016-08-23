# Jasmine-Matchers

[![NPM version](http://img.shields.io/npm/v/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect)
[![NPM downloads](http://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/Jasmine-Matchers)
[![Build Status](http://img.shields.io/travis/JamieMason/Jasmine-Matchers/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/Jasmine-Matchers)
[![Dependency Status](http://img.shields.io/david/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://david-dm.org/JamieMason/Jasmine-Matchers)
[![Join the chat at https://gitter.im/JamieMason/Jasmine-Matchers](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/Jasmine-Matchers)
[![Code Climate](https://img.shields.io/codeclimate/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers)
[![Coverage](https://img.shields.io/codeclimate/coverage/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers)

A huge library of test assertion matchers for a range of common use-cases, to improve the readability of tests written using the [Jasmine testing framework](http://jasmine.github.io/) from [Pivotal Labs](http://pivotallabs.com/).

1. **Make failing tests easier to debug** by avoiding vague messages such as _"expected false to be true"_ in favour of useful cues such as _"expected 3 to be even number"_.
2. **Make tests easier to read** by avoiding implementation noise such as `expect(cycleWheels % 2 === 0).toEqual(true)` in favour of simply stating that you `expect(cycleWheels).toBeEvenNumber()`.

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
| Manual   | Downloads are available on the [releases](https://github.com/JamieMason/Jasmine-Matchers/releases) page. |

<!-- ## Integration

| Platform | Instructions |
|:---------|:-------------|
| Browser | Embed [jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js) after Jasmine but before your tests. |
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
[toBeArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArray.spec.js) | `expect(array).toBeArray();`
[toBeArrayOfBooleans](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfBooleans.spec.js) | `expect(array).toBeArrayOfBooleans();`
[toBeArrayOfNumbers](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfNumbers.spec.js) | `expect(array).toBeArrayOfNumbers();`
[toBeArrayOfObjects](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfObjects.spec.js) | `expect(array).toBeArrayOfObjects();`
[toBeArrayOfSize](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfSize.spec.js) | `expect(array).toBeArrayOfSize(number);`
[toBeArrayOfStrings](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeArrayOfStrings.spec.js) | `expect(array).toBeArrayOfStrings();`
[toBeEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyArray.spec.js) | `expect(array).toBeEmptyArray();`
[toBeNonEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyArray.spec.js) | `expect(array).toBeNonEmptyArray();`

### Booleans

Matcher | Example
:-------|:-------
[toBeBoolean](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeBoolean.spec.js) | `expect(boolean).toBeBoolean();`
[toBeFalse](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeFalse.spec.js) | `expect(boolean).toBeFalse();`
[toBeTrue](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeTrue.spec.js) | `expect(boolean).toBeTrue();`

### Dates

Matcher | Example
:-------|:-------
[toBeAfter](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeAfter.spec.js) | `expect(date).toBeAfter(date);`
[toBeBefore](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeBefore.spec.js) | `expect(date).toBeBefore(date);`
[toBeDate](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeDate.spec.js) | `expect(date).toBeDate();`

### Functions and Errors

Matcher | Example
:-------|:-------
[toBeFunction](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeFunction.spec.js) | `expect(fn).toBeFunction();`
[toThrowAnyError](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toThrowAnyError.spec.js) | `expect(fn).toThrowAnyError();`
[toThrowErrorOfType](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toThrowErrorOfType.spec.js) | `expect(fn).toThrowErrorOfType(constructorName);`

### Numbers

Matcher | Example
:-------|:-------
[toBeCalculable](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeCalculable.spec.js) | `expect(mixed).toBeCalculable();`
[toBeEvenNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEvenNumber.spec.js) | `expect(number).toBeEvenNumber();`
[toBeGreaterThanOrEqualTo](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeGreaterThanOrEqualTo.spec.js) | `expect(number).toBeGreaterThanOrEqualTo(number);`
[toBeLessThanOrEqualTo](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeLessThanOrEqualTo.spec.js) | `expect(number).toBeLessThanOrEqualTo(number);`
[toBeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNumber.spec.js) | `expect(number).toBeNumber();`
[toBeOddNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeOddNumber.spec.js) | `expect(number).toBeOddNumber();`
[toBeWholeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWholeNumber.spec.js) | `expect(number).toBeWholeNumber();`
[toBeWithinRange](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWithinRange.spec.js) | `expect(number).toBeWithinRange(floor, ceiling);`

### Strings

Matcher | Example
:-------|:-------
[toBeEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyString.spec.js) | `expect(string).toBeEmptyString();`
[toBeHtmlString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeHtmlString.spec.js) | `expect(string).toBeHtmlString();`
[toBeIso8601](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeIso8601.spec.js) | `expect(string).toBeIso8601();`
[toBeJsonString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeJsonString.spec.js) | `expect(string).toBeJsonString();`
[toBeLongerThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeLongerThan.spec.js) | `expect(string).toBeLongerThan();`
[toBeNonEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyString.spec.js) | `expect(string).toBeNonEmptyString();`
[toBeSameLengthAs](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeSameLengthAs.spec.js) | `expect(string).toBeSameLengthAs();`
[toBeShorterThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeShorterThan.spec.js) | `expect(string).toBeShorterThan();`
[toBeString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeString.spec.js) | `expect(string).toBeString();`
[toBeWhitespace](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeWhitespace.spec.js) | `expect(string).toBeWhitespace();`
[toEndWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toEndWith.spec.js) | `expect(string).toEndWith(string);`
[toStartWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toStartWith.spec.js) | `expect(string).toStartWith(string);`

### Objects

Matcher | Example
:-------|:-------
[toBeEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeEmptyObject.spec.js) | `expect(object).toBeEmptyObject();`
[toBeNonEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeNonEmptyObject.spec.js) | `expect(object).toBeNonEmptyObject();`
[toBeObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toBeObject.spec.js) | `expect(object).toBeObject();`

### Members, Properties, Methods

Matcher | Example
:-------|:-------
[toHaveArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArray.spec.js) | `expect(object).toHaveArray(memberName);`
[toHaveArrayOfBooleans](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfBooleans.spec.js) | `expect(object).toHaveArrayOfBooleans(memberName);`
[toHaveArrayOfNumbers](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfNumbers.spec.js) | `expect(object).toHaveArrayOfNumbers(memberName);`
[toHaveArrayOfObjects](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfObjects.spec.js) | `expect(object).toHaveArrayOfObjects(memberName);`
[toHaveArrayOfSize](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfSize.spec.js) | `expect(object).toHaveArrayOfSize(memberName, size);`
[toHaveArrayOfStrings](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveArrayOfStrings.spec.js) | `expect(object).toHaveArrayOfStrings(memberName);`
[toHaveBoolean](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveBoolean.spec.js) | `expect(object).toHaveBoolean(memberName);`
[toHaveCalculable](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveCalculable.spec.js) | `expect(object).toHaveCalculable(memberName);`
[toHaveDate](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDate.spec.js) | `expect(object).toHaveDate(memberName);`
[toHaveDateAfter](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDateAfter.spec.js) | `expect(object).toHaveDateAfter(memberName, date);`
[toHaveDateBefore](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveDateBefore.spec.js) | `expect(object).toHaveDateBefore(memberName, date);`
[toHaveEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyArray.spec.js) | `expect(object).toHaveEmptyArray(memberName);`
[toHaveEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyObject.spec.js) | `expect(object).toHaveEmptyObject(memberName);`
[toHaveEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEmptyString.spec.js) | `expect(object).toHaveEmptyString(memberName);`
[toHaveEvenNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveEvenNumber.spec.js) | `expect(object).toHaveEvenNumber(memberName);`
[toHaveFalse](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveFalse.spec.js) | `expect(object).toHaveFalse(memberName);`
[toHaveHtmlString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveHtmlString.spec.js) | `expect(object).toHaveHtmlString(memberName);`
[toHaveIso8601](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveIso8601.spec.js) | `expect(object).toHaveIso8601(memberName);`
[toHaveJsonString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveJsonString.spec.js) | `expect(object).toHaveJsonString(memberName);`
[toHaveMember](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveMember.spec.js) | `expect(object).toHaveMember(memberName);`
[toHaveMethod](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveMethod.spec.js) | `expect(object).toHaveMethod(memberName);`
[toHaveNonEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyArray.spec.js) | `expect(object).toHaveNonEmptyArray(memberName);`
[toHaveNonEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyObject.spec.js) | `expect(object).toHaveNonEmptyObject(memberName);`
[toHaveNonEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNonEmptyString.spec.js) | `expect(object).toHaveNonEmptyString(memberName);`
[toHaveNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNumber.spec.js) | `expect(object).toHaveNumber(memberName);`
[toHaveNumberWithinRange](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveNumberWithinRange.spec.js) | `expect(object).toHaveNumberWithinRange(memberName, floor, ceiling);`
[toHaveObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveObject.spec.js) | `expect(object).toHaveObject(memberName);`
[toHaveOddNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveOddNumber.spec.js) | `expect(object).toHaveOddNumber(memberName);`
[toHaveString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveString.spec.js) | `expect(object).toHaveString(memberName);`
[toHaveStringLongerThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringLongerThan.spec.js) | `expect(object).toHaveStringLongerThan(memberName, string);`
[toHaveStringSameLengthAs](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringSameLengthAs.spec.js) | `expect(object).toHaveStringSameLengthAs(memberName, string);`
[toHaveStringShorterThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveStringShorterThan.spec.js) | `expect(object).toHaveStringShorterThan(memberName, string);`
[toHaveTrue](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveTrue.spec.js) | `expect(object).toHaveTrue(memberName);`
[toHaveWhitespaceString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveWhitespaceString.spec.js) | `expect(object).toHaveWhitespaceString(memberName);`
[toHaveWholeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/toHaveWholeNumber.spec.js) | `expect(object).toHaveWholeNumber(memberName);`

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
[any.arrayOfBooleans](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/arrayOfBooleans.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfBooleans());`
[any.arrayOfNumbers](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/arrayOfNumbers.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfNumbers());`
[any.arrayOfObjects](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/arrayOfObjects.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfObjects());`
[any.arrayOfSize](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/arrayOfSize.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfSize(number));`
[any.arrayOfStrings](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/arrayOfStrings.spec.js) | `expect(spy).toHaveBeenCalledWith(any.arrayOfStrings());`
[any.emptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/emptyArray.spec.js) | `expect(spy).toHaveBeenCalledWith(any.emptyArray());`
[any.nonEmptyArray](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/nonEmptyArray.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyArray());`

### Dates

Matcher | Example
:-------|:-------
[any.after](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/after.spec.js) | `expect(spy).toHaveBeenCalledWith(any.after(date));`
[any.before](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/before.spec.js) | `expect(spy).toHaveBeenCalledWith(any.before(date));`

### Numbers

Matcher | Example
:-------|:-------
[any.calculable](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/calculable.spec.js) | `expect(spy).toHaveBeenCalledWith(any.calculable());`
[any.evenNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/evenNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.evenNumber());`
[any.greaterThanOrEqualTo](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/greaterThanOrEqualTo.spec.js) | `expect(spy).toHaveBeenCalledWith(any.greaterThanOrEqualTo(number));`
[any.lessThanOrEqualTo](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/lessThanOrEqualTo.spec.js) | `expect(spy).toHaveBeenCalledWith(any.lessThanOrEqualTo(number));`
[any.oddNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/oddNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.oddNumber());`
[any.wholeNumber](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/wholeNumber.spec.js) | `expect(spy).toHaveBeenCalledWith(any.wholeNumber());`
[any.withinRange](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/withinRange.spec.js) | `expect(spy).toHaveBeenCalledWith(any.withinRange(floor, ceiling));`

### Strings

Matcher | Example
:-------|:-------
[any.endingWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/endingWith.spec.js) | `expect(spy).toHaveBeenCalledWith(any.endingWith(string));`
[any.iso8601](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/iso8601.spec.js) | `expect(spy).toHaveBeenCalledWith(any.iso8601());`
[any.jsonString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/jsonString.spec.js) | `expect(spy).toHaveBeenCalledWith(any.jsonString());`
[any.longerThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/longerThan.spec.js) | `expect(spy).toHaveBeenCalledWith(any.longerThan(string));`
[any.nonEmptyString](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/nonEmptyString.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyString());`
[any.sameLengthAs](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/sameLengthAs.spec.js) | `expect(spy).toHaveBeenCalledWith(any.sameLengthAs(string));`
[any.shorterThan](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/shorterThan.spec.js) | `expect(spy).toHaveBeenCalledWith(any.shorterThan(string));`
[any.startingWith](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/startingWith.spec.js) | `expect(spy).toHaveBeenCalledWith(any.startingWith(string));`
[any.whitespace](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/whitespace.spec.js) | `expect(spy).toHaveBeenCalledWith(any.whitespace());`

### Objects

Matcher | Example
:-------|:-------
[any.emptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/emptyObject.spec.js) | `expect(spy).toHaveBeenCalledWith(any.emptyObject());`
[any.nonEmptyObject](https://github.com/JamieMason/Jasmine-Matchers/blob/master/test/nonEmptyObject.spec.js) | `expect(spy).toHaveBeenCalledWith(any.nonEmptyObject());`

## Integration

### Browser

Embed [jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js) after Jasmine but before your tests.

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
