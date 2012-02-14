
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

    expect(x).toBeArray();
    expect(x).toBeArrayOfSize(number);
    expect(x).toBeBoolean();
    expect(x).toBeCloneOf(object);
    expect(x).toBeFalse();
    expect(x).toBeFunction();
    expect(x).toBeNonEmptyString();
    expect(x).toBeNumber();
    expect(x).toBeObject();
    expect(x).toBeString();
    expect(x).toBeTrue();
    expect(x).toThrowError();
    expect(x).toThrowErrorOfType(y);

Just include a reference to the script after your reference to Jasmine.
