# Jasmine-Matchers

Write simple, clear, helpful, easy to follow specs using the [Jasmine testing framework](http://pivotal.github.com/jasmine/) from [Pivotal Labs](http://pivotallabs.com/).

```javascript
expect(typeof record.save).toEqual('function');
// ✘ Expected 'undefined' to equal 'function'.
expect(record).toHaveMethod('getName');
// √ Expected member "save" of { sae : Function } to be function.

expect(person.age % 2 === 0).toEqual(true);
// ✘ Expected false to equal true.
expect(person).toHaveEvenNumber('age');
// √ Expected member "age" of { name : 'Guybrush', age : 25 } to be even number.

expect(uniqueId.length).toBeGreaterThan(0);
// ✘ Expected 0 to be greater than 0.
expect(uniqueId).toBeNonEmptyString();
// √ Expected "" to be non empty string.
```

## Project Status

[![Build Status](https://travis-ci.org/JamieMason/Jasmine-Matchers.svg?branch=master)](https://travis-ci.org/JamieMason/Jasmine-Matchers)

The latest stable version in Bower and NPM is `1.22.0`.

This repository contains `1.52.0` which will be released once some of the newer matchers have better test coverage.

    Statements: 89.17% (214 / 240)
    Branches:   92.93% (92 / 99)
    Functions:  75.25% (76 / 101)
    Lines:      89.17% (214 / 240)

## Installation

### NPM Install

    npm install jasmine-expect --save-dev

### Bower Install

    bower install jasmine-expect --save-dev

## Usage

### Karma

Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin.

### Browser

Include `<script src="jasmine-matchers.js"></script>` after Jasmine and before your specs.

## Arrays

```javascript
expect(array).toBeArray();
expect(array).toBeArrayOfBooleans();
expect(array).toBeArrayOfNumbers();
expect(array).toBeArrayOfObjects();
expect(array).toBeArrayOfSize(size);
expect(array).toBeArrayOfStrings();
expect(array).toBeEmptyArray();
expect(array).toBeNonEmptyArray();
expect(object).toHaveArray(memberName);
expect(object).toHaveArrayOfBooleans(memberName);
expect(object).toHaveArrayOfNumbers(memberName);
expect(object).toHaveArrayOfObjects(memberName);
expect(object).toHaveArrayOfSize(memberName, size);
expect(object).toHaveArrayOfStrings(memberName);
expect(object).toHaveEmptyArray(memberName);
expect(object).toHaveNonEmptyArray(memberName);
```

## Booleans

```javascript
expect(boolean).toBeBoolean();
expect(boolean).toBeFalse();
expect(boolean).toBeTrue();
expect(object).toHaveBoolean(memberName);
expect(object).toHaveFalse(memberName);
expect(object).toHaveTrue(memberName);
```

## Browser

```javascript
expect(document).toBeDocument();
expect(htmlElement).toBeHtmlCommentNode();
expect(htmlElement).toBeHtmlNode();
expect(htmlElement).toBeHtmlTextNode();
expect(object).toHaveHtmlNode(memberName);
expect(window).toBeWindow();
```

## Dates

```javascript
expect(date).toBeAfter(date);
expect(date).toBeBefore(date);
expect(date).toBeDate();
expect(string).toBeIso8601();
expect(object).toHaveDate(memberName);
expect(object).toHaveDateAfter(memberName, date);
expect(object).toHaveDateBefore(memberName, date);
expect(object).toHaveIso8601(memberName);
```

## Functions and Errors

```javascript
expect(function).toBeFunction();
expect(function).toThrowError();
expect(function).toThrowErrorOfType(type);
expect(object).toHaveMethod(memberName);
```

## Numbers

```javascript
expect(mixed).toBeCalculable();
expect(number).toBeEvenNumber();
expect(number).toBeNumber();
expect(number).toBeOddNumber();
expect(number).toBeWholeNumber();
expect(number).toBeWithinRange(floor, ceiling);
expect(object).toHaveCalculable(memberName);
expect(object).toHaveEvenNumber(memberName);
expect(object).toHaveNumber(memberName);
expect(object).toHaveNumberWithinRange(memberName, floor, ceiling);
expect(object).toHaveOddNumber(memberName);
expect(object).toHaveWholeNumber(memberName);
```

## Objects

```javascript
expect(object).toBeEmptyObject();
expect(object).toBeNonEmptyObject();
expect(object).toBeObject();
expect(object).toHaveEmptyObject(memberName);
expect(object).toHaveMember(memberName);
expect(object).toHaveNonEmptyObject(memberName);
expect(object).toHaveObject(memberName);
expect(object).toImplement(other);
```

## Strings

```javascript
expect(string).toBeEmptyString();
expect(string).toBeHtmlString();
expect(string).toBeJsonString();
expect(string).toBeLongerThan(other);
expect(string).toBeNonEmptyString();
expect(string).toBeSameLengthAs(other);
expect(string).toBeShorterThan(other);
expect(string).toBeString();
expect(string).toBeWhitespace();
expect(string).toEndWith(expected);
expect(string).toStartWith(expected);
expect(object).toHaveEmptyString(memberName);
expect(object).toHaveHtmlString(memberName);
expect(object).toHaveJsonString(memberName);
expect(object).toHaveNonEmptyString(memberName);
expect(object).toHaveString(memberName);
expect(object).toHaveStringLongerThan(memberName, other);
expect(object).toHaveStringSameLengthAs(memberName, other);
expect(object).toHaveStringShorterThan(memberName, other);
expect(object).toHaveWhitespaceString(memberName);
```

## License

> Copyright © Jamie Mason, @fold_left,
> https://jamiemason.github.io

> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:

> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
