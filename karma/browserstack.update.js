// node modules
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const res = childProcess.execSync('curl -u "' + process.env.BROWSERSTACK_USERNAME + ':' + process.env.BROWSERSTACK_ACCESS_KEY + '" https://www.browserstack.com/automate/browsers.json', {
  encoding: 'utf8'
});
const browsers = JSON.parse(res);
const location = path.join(__dirname, 'browserstack.json');
const config = browsers.sort(sortBy('browser_version')).sort(sortBy('browser')).reduce(addBrowser, {});
const json = JSON.stringify(config, null, 2);
fs.writeFileSync(location, json, 'utf8');

function addBrowser(memo, browser) {
  memo[getBrowserName(browser)] = {
    base: 'BrowserStack',
    browser: browser.browser,
    browser_version: browser.browser_version, // eslint-disable-line camelcase
    device: browser.device,
    os: browser.os,
    os_version: browser.os_version // eslint-disable-line camelcase
  };
  return memo;
}

function getBrowserName(browser) {
  return browser.browser + '-' + (browser.browser_version || browser.os_version);
}

function sortBy(key, reverse) {
  const moveSmaller = reverse ? 1 : -1;
  const moveLarger = reverse ? -1 : 1;

  return function (a, b) {
    if (a[key] < b[key]) {
      return moveSmaller;
    }
    if (a[key] > b[key]) {
      return moveLarger;
    }
    return 0;
  };
}
