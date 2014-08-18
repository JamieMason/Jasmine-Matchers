# Jasmine-Matchers

Additional matchers for the Jasmine BDD JavaScript testing library.

## Installation

### NPM Install

    npm install jasmine-expect --save-dev

### Bower Install

    bower install jasmine-expect --save-dev

## Usage

### Karma

Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin.

### Browser

Embed [dist/jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js)
after the Jasmine framework and before any of your tests.

## Description

The [Jasmine testing framework](http://pivotal.github.com/jasmine/) from [Pivotal Labs](http://pivotallabs.com/) comes with a small set of [default matchers](https://github.com/pivotal/jasmine/wiki/Matchers);

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

All [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) does is add a few more;

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

## Usage

Just include a reference to dist/jasmine-matchers.js after your reference to Jasmine, or use `require('jasmine-expect')`.

## License

> Copyright © 2013 Jamie Mason, @GotNoSugarBaby,
> https://github.com/JamieMason

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
