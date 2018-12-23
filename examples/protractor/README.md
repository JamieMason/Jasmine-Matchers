# Jasmine Matchers Protractor Example

## System Dependencies

Protractor requires you to have the
[Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
manually installed beforehand.

## Running Tests

1. Run `npm start` to start the Selenium Server which Protractor will send
   requests to.
1. Leave the Server running then open another Terminal Session in another
   window.
1. In the new Terminal window, run `npm test`.
1. Return to the Server Terminal and hit Ctrl+C to stop the Server.

## Configuration

Jasmine Matchers is loaded by adding `node_modules/jasmine-expect/index.js` as
the first item in the `specs` array in `./conf.js`.

## Further Reading

For more information, please see the
[Protractor Tutorial](http://www.protractortest.org/#/tutorial) and
[Protractor Gitter Chat](https://gitter.im/angular/protractor).
