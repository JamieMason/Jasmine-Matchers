# Jasmine-Matchers

> Readable tests.

[![Build Status](https://img.shields.io/travis/JamieMason/Jasmine-Matchers/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/Jasmine-Matchers) [![npm downloads](https://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect) [![Code Climate](https://img.shields.io/codeclimate/coverage/github/JamieMason/Jasmine-Matchers.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/Jasmine-Matchers) [![Twitter](https://img.shields.io/twitter/url/https/github.com/JamieMason/Jasmine-Matchers.svg?style=social)](https://twitter.com/intent/tweet?text=Additional%20matchers%20for%20the%20Jasmine%20BDD%20JavaScript%20testing%20library%20%23JavaScript%20%23NodeJS%20&url=https%3A%2F%2Fgithub.com%2FJamieMason%2FJasmine-Matchers) [![GitHub stars](https://img.shields.io/github/stars/JamieMason/Jasmine-Matchers.svg?style=social&label=Star)](https://github.com/JamieMason/Jasmine-Matchers) [![GitHub followers](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)

## Contents

+ [Purpose](#purpose)
+ [Installation](#installation)
    + [npm](#npm)
    + [Bower](#bower)
    + [Manual](#manual)
+ [Integration](#integration)
    + [Browser](#browser)
    + [Karma](#karma)
    + [Node.js](#node-js)
    + [Sublime Text](#sublime-text)
+ [Available Matchers](#available-matchers)
    + [toBeArray](#tobearray), [toHaveArray](#tohavearray), [toBeArrayOfBooleans](#tobearrayofbooleans), [toHaveArrayOfBooleans](#tohavearrayofbooleans), [toBeArrayOfNumbers](#tobearrayofnumbers), [toHaveArrayOfNumbers](#tohavearrayofnumbers), [toBeArrayOfObjects](#tobearrayofobjects), [toHaveArrayOfObjects](#tohavearrayofobjects), [toBeArrayOfSize](#tobearrayofsize), [toHaveArrayOfSize](#tohavearrayofsize), [toBeArrayOfStrings](#tobearrayofstrings), [toHaveArrayOfStrings](#tohavearrayofstrings), [toBeEmptyArray](#tobeemptyarray), [toHaveEmptyArray](#tohaveemptyarray), [toBeNonEmptyArray](#tobenonemptyarray), [toHaveNonEmptyArray](#tohavenonemptyarray), [toBeBoolean](#tobeboolean), [toHaveBoolean](#tohaveboolean), [toBeFalse](#tobefalse), [toHaveFalse](#tohavefalse), [toBeTrue](#tobetrue), [toHaveTrue](#tohavetrue), [toBeAfter](#tobeafter), [toHaveDateAfter](#tohavedateafter), [toBeBefore](#tobebefore), [toHaveDateBefore](#tohavedatebefore), [toBeDate](#tobedate), [toHaveDate](#tohavedate), [toBeIso8601](#tobeiso8601), [toHaveIso8601](#tohaveiso8601), [toBeFunction](#tobefunction), [toHaveMethod](#tohavemethod), [toThrowAnyError](#tothrowanyerror), [toThrowErrorOfType](#tothrowerroroftype), [toBeCalculable](#tobecalculable), [toHaveCalculable](#tohavecalculable), [toBeEvenNumber](#tobeevennumber), [toHaveEvenNumber](#tohaveevennumber), [toBeNumber](#tobenumber), [toHaveNumber](#tohavenumber), [toBeOddNumber](#tobeoddnumber), [toHaveOddNumber](#tohaveoddnumber), [toBeWholeNumber](#tobewholenumber), [toHaveWholeNumber](#tohavewholenumber), [toBeWithinRange](#tobewithinrange), [toHaveNumberWithinRange](#tohavenumberwithinrange), [toBeEmptyObject](#tobeemptyobject), [toHaveEmptyObject](#tohaveemptyobject), [toBeNonEmptyObject](#tobenonemptyobject), [toHaveNonEmptyObject](#tohavenonemptyobject), [toBeObject](#tobeobject), [toHaveObject](#tohaveobject), [toHaveMember](#tohavemember), [toImplement](#toimplement), [toBeEmptyString](#tobeemptystring), [toHaveEmptyString](#tohaveemptystring), [toBeHtmlString](#tobehtmlstring), [toHaveHtmlString](#tohavehtmlstring), [toBeJsonString](#tobejsonstring), [toHaveJsonString](#tohavejsonstring), [toBeLongerThan](#tobelongerthan), [toHaveStringLongerThan](#tohavestringlongerthan), [toBeNonEmptyString](#tobenonemptystring), [toHaveNonEmptyString](#tohavenonemptystring), [toBeSameLengthAs](#tobesamelengthas), [toHaveStringSameLengthAs](#tohavestringsamelengthas), [toBeShorterThan](#tobeshorterthan), [toHaveStringShorterThan](#tohavestringshorterthan), [toBeString](#tobestring), [toHaveString](#tohavestring), [toBeWhitespace](#tobewhitespace), [toEndWith](#toendwith), [toStartWith](#tostartwith), [toHaveWhitespaceString](#tohavewhitespacestring)
+ [Known Supported Devices](#known-supported-devices)

## Purpose

The [Jasmine testing framework](http://jasmine.github.io/) from [Pivotal Labs](http://pivotallabs.com/) comes with this [default set of matchers](http://jasmine.github.io/edge/introduction.html#section-Expectations);

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

Using the default Matchers your tests and failure output might look something like this;

```javascript
it('should expose the expected API', function() {
  expect(typeof record.save).toEqual('function');
});
```

> Expected "undefined" to equal "function"

```javascript
it('should distribute evenly', function() {
  expect(basket.items % 2 === 0).toEqual(true);
});
```

> Expected false to equal true

Using [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) the same tests and failure output can be written like this;

```javascript
it('should expose the expected API', function() {
  expect(record).toHaveMethod('save');
});
```

> Expected member "save" of { save : undefined } to be function.

```javascript
it('should distribute evenly', function() {
  expect(basket).toHaveEvenNumber('items');
});
```

> Expected member "items" of { items : 25 } to be even number.

## Installation

### npm

```bash
npm install jasmine-expect --save-dev
```

### Bower

```bash
bower install jasmine-expect --save-dev
```

### Manual

Downloads are available on the [releases](https://github.com/JamieMason/Jasmine-Matchers/releases) page.

## Integration

### Browser

Include Jasmine Matchers after Jasmine but before your tests.

```html
<script src="/path/to/jasmine-matchers.js"></script>
```

### Karma

Integration is easy with the [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) plugin.

### Node.js

When using [jasmine-node](https://github.com/mhevery/jasmine-node) 1.x, provide the path to where Jasmine Matchers is installed as the value for `--requireJsSetup`.

```bash
jasmine-node --requireJsSetup node_modules/jasmine-expect/index.js test
```

jasmine-node 2.x has no such hooks that I'm aware of for loading helpers, in this case the following call is needed before the first test in your suite.

```javascript
require('jasmine-expect');
```

### Sublime Text

[Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets) can be installed with [Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets) to ease development with Jasmine Matchers in Sublime Text.

## Available Matchers

### toBeArray

```javascript
expect([]).toBeArray();
```

### toHaveArray

```javascript
expect({
    memberName: []
}).toHaveArray('memberName');
```

### toBeArrayOfBooleans

```javascript
expect([true, false, true]).toBeArrayOfBooleans();
```

### toHaveArrayOfBooleans

```javascript
expect({
    memberName: [true, false, true]
}).toHaveArrayOfBooleans('memberName');
```

### toBeArrayOfNumbers

```javascript
expect([12, 82, 7]).toBeArrayOfNumbers();
```

### toHaveArrayOfNumbers

```javascript
expect({
    memberName: [12, 82, 7]
}).toHaveArrayOfNumbers('memberName');
```

### toBeArrayOfObjects

```javascript
expect([{}, {}]).toBeArrayOfObjects();
```

### toHaveArrayOfObjects

```javascript
expect({
    memberName: [{}, {}]
}).toHaveArrayOfObjects('memberName');
```

### toBeArrayOfSize

```javascript
expect([null, 31, 'hi']).toBeArrayOfSize(3);
```

### toHaveArrayOfSize

```javascript
expect({
    memberName: [null, 31, 'hi']).toBeArrayOfSi
}).toHaveArrayOfSize('memberName', size);
```

### toBeArrayOfStrings

```javascript
expect(['foo', 'bar']).toBeArrayOfStrings();
```

### toHaveArrayOfStrings

```javascript
expect({
    memberName: ['foo', 'bar']
}).toHaveArrayOfStrings('memberName');
```

### toBeEmptyArray

```javascript
expect([]).toBeEmptyArray();
```

### toHaveEmptyArray

```javascript
expect({
    memberName: []
}).toHaveEmptyArray('memberName');
```

### toBeNonEmptyArray

```javascript
expect([98, 'banana']).toBeNonEmptyArray();
```

### toHaveNonEmptyArray

```javascript
expect({
    memberName: [98, 'banana']
}).toHaveNonEmptyArray('memberName');
```

### toBeBoolean

```javascript
expect(false).toBeBoolean();
```

### toHaveBoolean

```javascript
expect({
    memberName: false
}).toHaveBoolean('memberName');
```

### toBeFalse

```javascript
expect(false).toBeFalse();
```

### toHaveFalse

```javascript
expect({
    memberName: false
}).toHaveFalse('memberName');
```

### toBeTrue

```javascript
expect(true).toBeTrue();
```

### toHaveTrue

```javascript
expect({
    memberName: true
}).toHaveTrue('memberName');
```

### toBeAfter

```javascript
expect(new Date('2014-01-01')).toBeAfter(new Date('1975-01-01'));
```

### toHaveDateAfter

```javascript
expect({
    memberName: new Date('2014-01-01')
}).toHaveDateAfter('memberName', new Date('1975-01-01'));
```

### toBeBefore

```javascript
expect(new Date('1975-01-01')).toBeBefore(new Date('2014-01-01'));
```

### toHaveDateBefore

```javascript
expect({
    memberName: new Date('1975-01-01')
}).toHaveDateBefore('memberName', new Date('2014-01-01'));
```

### toBeDate

```javascript
expect(new Date()).toBeDate();
```

### toHaveDate

```javascript
expect({
    memberName: new Date()
}).toHaveDate('memberName');
```

### toBeIso8601

```javascript
expect('2013-07-08T07:29:15').toBeIso8601();
```

### toHaveIso8601

```javascript
expect({
    memberName: '2013-07-08T07:29:15'
}).toHaveIso8601('memberName');
```

### toBeFunction

```javascript
expect(function() {}).toBeFunction();
```

### toHaveMethod

```javascript
expect({
    memberName: function() {}
}).toHaveMethod('memberName');
```

### toThrowAnyError

```javascript
expect(function() {
    return badReference.unreachable;
}).toThrowAnyError();
```

### toThrowErrorOfType

```javascript
expect(function() {
    return badReference.unreachable;
}).toThrowErrorOfType(ReferenceError);
```

### toBeCalculable

```javascript
expect('12').toBeCalculable();
```

### toHaveCalculable

```javascript
expect({
    memberName: '14'
}).toHaveCalculable('memberName');
```

### toBeEvenNumber

```javascript
expect(4).toBeEvenNumber();
```

### toHaveEvenNumber

```javascript
expect({
    memberName: 4
}).toHaveEvenNumber('memberName');
```

### toBeNumber

```javascript
expect(66).toBeNumber();
```

### toHaveNumber

```javascript
expect({
    memberName: 66
}).toHaveNumber('memberName');
```

### toBeOddNumber

```javascript
expect(3).toBeOddNumber();
```

### toHaveOddNumber

```javascript
expect({
    memberName: 3
}).toHaveOddNumber('memberName');
```

### toBeWholeNumber

```javascript
expect(10).toBeWholeNumber();
```

### toHaveWholeNumber

```javascript
expect({
    memberName: 10
}).toHaveWholeNumber('memberName');
```

### toBeWithinRange

```javascript
expect(6).toBeWithinRange(0, 10);
```

### toHaveNumberWithinRange

```javascript
expect({
    memberName: 6
}).toHaveNumberWithinRange('memberName', 0, 10);
```

### toBeEmptyObject

```javascript
expect({}).toBeEmptyObject();
```

### toHaveEmptyObject

```javascript
expect({
    memberName: {}
}).toHaveEmptyObject('memberName');
```

### toBeNonEmptyObject

```javascript
expect({
    some: 'data'
}).toBeNonEmptyObject();
```

### toHaveNonEmptyObject

```javascript
expect({
    memberName: {
        some: 'data'
    }
}).toHaveNonEmptyObject('memberName');
```

### toBeObject

```javascript
expect({}).toBeObject();
```

### toHaveObject

```javascript
expect({
    memberName: {}
}).toHaveObject('memberName');
```

### toHaveMember

```javascript
expect({
    memberName: undefined
}).toHaveMember('memberName');
```

### toImplement

```javascript
expect({
    name: 'Clive',
    age: 72
}).toImplement({
    name: String,
    age: Number
});
```

### toBeEmptyString

```javascript
expect('').toBeEmptyString();
```

### toHaveEmptyString

```javascript
expect({
    memberName: ''
}).toHaveEmptyString('memberName');
```

### toBeHtmlString

```javascript
expect('<div></div>').toBeHtmlString();
```

### toHaveHtmlString

```javascript
expect({
    memberName: '<div></div>'
}).toHaveHtmlString('memberName');
```

### toBeJsonString

```javascript
expect('{"name":"Winston"}').toBeJsonString();
```

### toHaveJsonString

```javascript
expect({
    memberName: '{"name":"Winston"}'
}).toHaveJsonString('memberName');
```

### toBeLongerThan

```javascript
expect('Antidisestablishmentarianism').toBeLongerThan('No');
```

### toHaveStringLongerThan

```javascript
expect({
    memberName: 'Antidisestablishmentarianism'
}).toHaveStringLongerThan('memberName', 'No');
```

### toBeNonEmptyString

```javascript
expect('filled up').toBeNonEmptyString();
```

### toHaveNonEmptyString

```javascript
expect({
    memberName: 'filled up'
}).toHaveNonEmptyString('memberName');
```

### toBeSameLengthAs

```javascript
expect('Paul').toBeSameLengthAs('Jean');
```

### toHaveStringSameLengthAs

```javascript
expect({
    memberName: 'Paul'
}).toHaveStringSameLengthAs('memberName', 'Jean');
```

### toBeShorterThan

```javascript
expect('No').toBeShorterThan('Antidisestablishmentarianism');
```

### toHaveStringShorterThan

```javascript
expect({
    memberName: 'No'
}).toHaveStringShorterThan('memberName', 'Antidisestablishmentarianism');
```

### toBeString

```javascript
expect('').toBeString();
```

### toHaveString

```javascript
expect({
    memberName: ''
}).toHaveString('memberName');
```

### toBeWhitespace

```javascript
expect(' ').toBeWhitespace();
```

### toEndWith

```javascript
expect('grandmother').toEndWith('mother');
```

### toStartWith

```javascript
expect('physiotherapy').toStartWith('physio');
```

### toHaveWhitespaceString

```javascript
expect({
    memberName: ' '
}).toHaveWhitespaceString('memberName');
```

## Known Supported Devices

During development, Jasmine-Matchers is tested against the following environments.

+ Chrome 40.0.2214 (Mac OS X 10.10.1)
+ Firefox 33.0.0 (Mac OS X 10.10)
+ IE 7 (Windows XP on VirtualBox)
+ IE 8 (Windows XP on VirtualBox)
+ IE 9 (Windows 7 on VirtualBox)
+ IE 10 (Windows 7 on VirtualBox)
+ IE 11 (Windows 8.1 on SauceLabs)
+ Opera 27.0.1689 (Mac OS X 10.10.1)
+ Opera Mobile (Amazon Kindle Fire HD 8.9 on Opera Mobile Emulator)
+ PhantomJS 1.9.8 (Mac OS X)
+ Safari 8.0.2 (Mac OS X 10.10.1)
