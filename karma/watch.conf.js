// modules
var baseConfig = require('./base.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = ['PhantomJS'];
      base.autoWatch = true;
      base.singleRun = false;
      config.set(base);
    }
  });
};
