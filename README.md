# Jasmine-Matchers

    npm install jasmine-expect --save-dev

> If you have some useful matchers of your own, please add them via [Pull Request](https://github.com/JamieMason/Jasmine-Matchers/pull/new/master).

The [Jasmine testing framework](http://pivotal.github.com/jasmine/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](https://github.com/pivotal/jasmine/wiki/Matchers);

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

All [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) does is add a few more;

## Arrays

    expect(array).toBeArray()
    expect(array).toBeArrayOfSize(int)
    expect(array).toBeEmptyArray()
    expect(array).toBeNonEmptyArray()
    expect(array).toBeArrayOfObjects()
    expect(array).toBeArrayOfStrings()
    expect(array).toBeArrayOfNumbers()
    expect(array).toBeArrayOfBooleans()

## Booleans

    expect(boolean).toBeBoolean()
    expect(boolean).toBeTrue()
    expect(boolean).toBeFalse()

## Browser

    expect(object).toBeWindow()
    expect(object).toBeDocument()
    expect(object).toBeHtmlNode()
    expect(object).toBeHtmlTextNode()
    expect(object).toBeHtmlCommentNode()

## Exceptions

    expect(fn).toThrowError()
    expect(fn).toThrowErrorOfType('TypeError')

## Numbers

    expect(number).toBeNumber()
    expect(number).toBeEvenNumber()
    expect(number).toBeOddNumber()
    expect(mixed).toBeCalculable()

## Objects

    expect(object).toBeObject()
    expect(object).toImplement()
    expect(function).toBeFunction()

## Strings

    expect(string).toBeString()
    expect(string).toBeEmptyString()
    expect(string).toBeNonEmptyString()
    expect(string).toBeHtmlString()
    expect(string).toBeJsonString()
    expect(string).toBeWhitespace()
    expect(string).toStartWith(substring)
    expect(string).toEndWith(substring)
    expect(string).toBeLongerThan(string)
    expect(string).toBeShorterThan(string)
    expect(string).toBeSameLengthAs(string)

## Dates

    expect(date).toBeDate()
    expect(date).toBeBefore(date)
    expect(date).toBeAfter(date)
    expect(string).toBeIso8601()

## Usage

Just include a reference to dist/jasmine-matchers.js after your reference to Jasmine.

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
