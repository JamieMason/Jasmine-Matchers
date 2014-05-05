# Jasmine-Matchers

Extends the [default set of matchers](https://github.com/pivotal/jasmine/wiki/Matchers) for the
[Jasmine testing framework](http://pivotal.github.com/jasmine/) because we want tests which;

* Are easy to read.
* Are explicit about what we're trying to do.
* Are free of _how_ what we're trying to do is done.
* Produce messages and errors which are clear and simple.

What this means in practice is that you can replace expectations like these;

```javascript
expect(typeof person.getName).toEqual('function');
// >> Expected 'object' to equal 'function'.
expect(person.name.length > 0).toEqual(true);
// >> Expected false to equal true.
expect(person.surname.length === brother.surname.length).toEqual(true);
// >> Expected false to equal true.
expect(person.age % 2 === 0).toEqual(true);
// >> Expected false to equal true.
```

With expectations like these;

```javascript
expect(person.getName).toBeFunction();
// >> Expected null to be function.
expect(person.name).toBeNonEmptyString();
// >> Expected '' to be non empty string.
expect(person.surname).toBeSameLengthAs(brother.surname);
// >> Expected '' to be same length as 'x'.
expect(person.age).toBeEvenNumber();
// >> Expected 5 to be even number.
```

## Contents

* [Installation](#installation)
  * [NPM](#npm)
  * [Bower](#bower)
* [Usage](#usage)
  * [Browser](#browser)
  * [Node.js](#nodejs)
  * [Karma](#karma)
* [Available Matchers](#available-matchers)
  * [Arrays](#arrays)
  * [Booleans](#booleans)
  * [Browser](#browser)
  * [Exceptions](#exceptions)
  * [Numbers](#numbers)
  * [Objects](#objects)
  * [Strings](#strings)
  * [Dates](#dates)
* [License](#license)

## Installation

### NPM

```bash
npm install jasmine-expect --save-dev
```

### Bower

```bash
bower install jasmine-expect --save-dev
```

## Usage

### Browser

Embed [dist/jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js)
after the Jasmine framework and before any of your tests.

```html
<script src="path/to/jasmine.js"></script>
<script src="path/to/jasmine-matchers.js"></script>
```

### Node.js

Call `require('jasmine-expect')` after the Jasmine framework and before any of your tests.

### Karma

Include `"path/to/jasmine-matchers.js"` as the first value in
[Karma's `files` array configuration](http://karma-runner.github.io/0.10/config/files.html).

## Available Matchers

### Arrays

```javascript
expect(array).toBeArray();
expect(array).toBeArrayOfBooleans();
expect(array).toBeArrayOfNumbers();
expect(array).toBeArrayOfObjects();
expect(array).toBeArrayOfSize(size);
expect(array).toBeArrayOfStrings();
expect(array).toBeEmptyArray();
expect(array).toBeNonEmptyArray();
```

### Booleans

```javascript
expect(boolean).toBeBoolean();
expect(boolean).toBeFalse();
expect(boolean).toBeTrue();
```

### Browser

```javascript
expect(element).toBeHtmlCommentNode();
expect(element).toBeHtmlNode();
expect(element).toBeHtmlTextNode();
expect(object).toBeDocument();
expect(object).toBeWindow();
```

### Exceptions

```javascript
expect(fn).toThrowError();
expect(fn).toThrowErrorOfType(string);
```

### Numbers

```javascript
expect(number).toBeEvenNumber();
expect(number).toBeNumber();
expect(number).toBeOddNumber();
expect(number).toBeWholeNumber();
expect(number).toBeWithinRange(floor, ceiling);
expect(numberOrString).toBeCalculable();
```

### Objects

```javascript
expect(object).toBeFunction();
expect(object).toBeObject();
expect(object).toHaveArray(memberName);
expect(object).toHaveArrayOfBooleans(memberName);
expect(object).toHaveArrayOfNumbers(memberName);
expect(object).toHaveArrayOfObjects(memberName);
expect(object).toHaveArrayOfSize(memberName, size);
expect(object).toHaveArrayOfStrings(memberName);
expect(object).toHaveEmptyArray(memberName);
expect(object).toHaveNonEmptyArray(memberName);
expect(object).toImplement(api);
```

### Strings

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
```

### Dates

```javascript
expect(date).toBeAfter(date);
expect(date).toBeBefore(date);
expect(date).toBeDate();
expect(string).toBeIso8601();
```

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
