// node modules
var fs = require('fs');
var path = require('path');

// 3rd party modules
var SauceLabs = require('saucelabs');

var myAccount = new SauceLabs({
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
});

myAccount.getAllBrowsers(function (err, res) {
  if (err) {
    throw new Error('failed to contact saucelabs ' + err.message);
  }
  var location = path.resolve('./saucelabs.json');
  var config = res.sort(sortBy('api_name')).reduce(addBrowser, {});
  var json = JSON.stringify(config, null, 2);
  fs.writeFileSync(location, json, 'utf8');
});

function addBrowser(config, browser) {
  config[getBrowserName(browser)] = {
    base: 'SauceLabs',
    browserName: browser.api_name,
    platform: browser.os,
    tags: [getPlatformTag(browser), browser.api_name, getBrowserName(browser)],
    version: browser.short_version
  };
  return config;
}

function getBrowserName(browser) {
  return browser.api_name.replace(/ /g, '-') + '-' + browser.short_version;
}

function getPlatformTag(browser) {
  return isMobile(browser) ? 'mobile' : 'desktop';
}

function isMobile(browser) {
  return browser.long_name.search(/Simulator|Emulator/) !== -1;
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
