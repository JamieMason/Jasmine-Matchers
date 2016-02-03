#!/usr/bin/env sh

npm run test-saucelabs -- --browsers 'android-4.4' && \
npm run test-saucelabs -- --browsers 'android-5.1' && \
npm run test-saucelabs -- --browsers 'ios-9.2' && \
npm run test-saucelabs -- --browsers 'ios-8.4' && \
npm run test-saucelabs -- --browsers 'ios-8.0' && \
npm run test-saucelabs -- --browsers 'winChrome47' && \
npm run test-saucelabs -- --browsers 'osxSafari9' && \
npm run test-saucelabs -- --browsers 'osxSafari8' && \
npm run test-saucelabs -- --browsers 'osxFirefox43' && \
npm run test-saucelabs -- --browsers 'osxFirefox40' && \
npm run test-saucelabs -- --browsers 'winIe11' && \
npm run test-saucelabs -- --browsers 'winIe10' && \
npm run test-saucelabs -- --browsers 'winIe9'
