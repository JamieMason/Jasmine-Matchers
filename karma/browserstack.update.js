// node modules
var childProcess = require('child_process');
var fs = require('fs');
var path = require('path');

var res = childProcess.execSync('curl -u "' + process.env.BROWSERSTACK_USERNAME + ':' + process.env.BROWSERSTACK_ACCESS_KEY + '" https://www.browserstack.com/automate/browsers.json', {
  encoding: 'utf8'
});
var browsers = JSON.parse(res);
var location = path.join(__dirname, 'browserstack.json');
var config = browsers.sort(sortBy('browser_version')).sort(sortBy('browser')).reduce(addBrowser, {});
var json = JSON.stringify(config, null, 2);
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
  var moveSmaller = reverse ? 1 : -1;
  var moveLarger = reverse ? -1 : 1;

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
