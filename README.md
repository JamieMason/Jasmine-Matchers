# Jasmine-Matchers

> If you have some useful matchers of your own, please add them via [Pull Request](https://github.com/JamieMason/Jasmine-Matchers/pull/new/master).

The [Jasmine testing framework](http://pivotal.github.com/jasmine/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](https://github.com/pivotal/jasmine/wiki/Matchers);

    expect(function(){fn();}).toThrow(e);
    expect(x).toBe(y);
    expect(x).toBeDefined();
    expect(x).toBeFalsy();
    expect(x).toBeGreaterThan(y);
    expect(x).toBeLessThan(y);
    expect(x).toBeNull();
    expect(x).toBeTruthy();
    expect(x).toBeUndefined();
    expect(x).toContain(y);
    expect(x).toEqual(y);
    expect(x).toMatch(pattern);

All [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) does is add a few more;

## Arrays

    expect(x).toBeArray();
    expect(x).toBeArrayOfSize(number);
    expect(x).toBeNonEmptyArray();

## Booleans

    expect(x).toBeTrue();
    expect(x).toBeFalse();
    expect(x).toBeBoolean();

## Browser

    expect(x).toBeWindow();
    expect(x).toBeDocument();
    expect(x).toBeHtmlCommentNode();
    expect(x).toBeHtmlNode();
    expect(x).toBeHtmlTextNode();

## Errors

    expect(fn).toThrowError();
    expect(fn).toThrowErrorOfType('TypeError');

## Numbers

    expect(x).toBeNumber();
    expect(x).toBeCalculable();
    expect(x).toBeEvenNumber();
    expect(x).toBeOddNumber();

## Objects

    expect(x).toBeFunction();
    expect(x).toBeObject();
    expect(object).toImplement(api);

## Strings

    expect(x).toBeNonEmptyString();
    expect(x).toBeString();
    expect(x).toBeHtmlString();
    expect(x).toBeWhitespace();

## Other

    expect(x).toBeDate();

## Usage

Just include a reference to the script after your reference to Jasmine.

## License

> Copyright © 2012 Jamie Mason, @GotNoSugarBaby, https://github.com/JamieMason
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
