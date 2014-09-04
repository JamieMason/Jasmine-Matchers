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

    expect(array).toBeArray();
    expect(array).toBeArrayOfBooleans();
    expect(array).toBeArrayOfNumbers();
    expect(array).toBeArrayOfObjects();
    expect(array).toBeArrayOfSize(size);
    expect(array).toBeArrayOfStrings();
    expect(array).toBeEmptyArray();
    expect(array).toBeNonEmptyArray();

## Booleans

    expect(boolean).toBeBoolean();
    expect(boolean).toBeFalse();
    expect(boolean).toBeTrue();

## Browser

    expect(element).toBeHtmlCommentNode();
    expect(element).toBeHtmlNode();
    expect(element).toBeHtmlTextNode();
    expect(object).toBeDocument();
    expect(object).toBeWindow();

## Exceptions

    expect(fn).toThrowAnyError();
    expect(fn).toThrowErrorOfType(string);

## Numbers

    expect(number).toBeEvenNumber();
    expect(number).toBeNumber();
    expect(number).toBeOddNumber();
    expect(number).toBeWholeNumber();
    expect(number).toBeWithinRange(floor, ceiling);
    expect(numberOrString).toBeCalculable();

## Objects

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

## Strings

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

## Dates

    expect(date).toBeAfter(date);
    expect(date).toBeBefore(date);
    expect(date).toBeDate();
    expect(string).toBeIso8601();

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
