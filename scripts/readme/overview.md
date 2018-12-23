## Overview

##### What

A huge library of test matchers for a range of common use-cases, compatible with
all versions of [Jasmine](http://jasmine.github.io/) and
[Jest](http://facebook.github.io/jest/).

##### Why

Custom Matchers make tests easier to read and produce relevant and useful
messages when they fail.

##### How

By avoiding vague messages such as _"expected false to be true"_ in favour of
useful cues such as _"expected 3 to be even number"_ and avoiding implementation
noise such as `expect(cycleWheels % 2 === 0).toEqual(true)` in favour of simply
stating that you `expect(cycleWheels).toBeEvenNumber()`.

##### Sponsors

<a href="https://browserstack.com">
  <img alt="Sponsored by BrowserStack" src="https://cdn.rawgit.com/JamieMason/Jasmine-Matchers/develop/browserstack.svg" height="40" />
</a>
