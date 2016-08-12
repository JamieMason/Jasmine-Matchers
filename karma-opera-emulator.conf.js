// modules
var baseConfig = require('./karma.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'bin/opera-emulator'
      ];
      config.set(base);
    }
  });
};
