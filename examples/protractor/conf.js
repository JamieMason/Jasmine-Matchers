exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['node_modules/jasmine-expect/index.js', 'src/**/*.e2e.spec.js'],
};
