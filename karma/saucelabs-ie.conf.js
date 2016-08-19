// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'internet-explorer-11',
        'internet-explorer-10',
        'internet-explorer-9'
        // microsoftedge-13 // saucelabs keeps timing out
        // internet-explorer-8 // unsupported
      ];
      config.set(base);
    }
  });
};
