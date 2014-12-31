# Jasmine-Matchers

```bash
npm install jasmine-expect --save-dev
```

> If you have some useful matchers of your own, please add them via [Pull Request](https://github.com/JamieMason/Jasmine-Matchers/pull/new/master).

The [Jasmine testing framework](http://pivotal.github.com/jasmine/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](https://github.com/pivotal/jasmine/wiki/Matchers);

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
```

## Booleans

```javascript
expect(boolean).toBeBoolean();
expect(boolean).toBeFalse();
expect(boolean).toBeTrue();
```

## Browser

```javascript
expect(element).toBeHtmlCommentNode();
expect(element).toBeHtmlNode();
expect(element).toBeHtmlTextNode();
expect(object).toBeDocument();
expect(object).toBeWindow();
```

## Exceptions

```javascript
expect(fn).toThrowAnyError();
expect(fn).toThrowErrorOfType(string);
```

## Numbers

```javascript
expect(number).toBeEvenNumber();
expect(number).toBeNumber();
expect(number).toBeOddNumber();
expect(number).toBeWholeNumber();
expect(number).toBeWithinRange(floor, ceiling);
expect(numberOrString).toBeCalculable();
```

## Objects

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
```

## Dates

```javascript
expect(date).toBeAfter(date);
expect(date).toBeBefore(date);
expect(date).toBeDate();
expect(string).toBeIso8601();
```

## Usage

Just include a reference to dist/jasmine-matchers.js after your reference to Jasmine, or use `require('jasmine-expect')`.
