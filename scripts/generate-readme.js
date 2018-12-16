const fs = require('fs');
const path = require('path');

const getPath = (location) => path.resolve(__dirname, location);
const readFile = (location) => fs.readFileSync(getPath(location), 'utf8');
const writeFile = (location, data) =>
  fs.writeFileSync(getPath(location), data, 'utf8');
const readmePath = getPath('../README.md');

const browserSupport = readFile('./readme/browser-support.md');
const index = readFile('./readme/index.md');
const installation = readFile('./readme/installation.md');
const integration = readFile('./readme/integration.md');
const matchers = readFile('./readme/matchers.md');
const overview = readFile('./readme/overview.md');

const api = require('./data/api');
const jasmineApi = require('./data/jasmine-api');

const getJasmineExample = (method) =>
  `jasmine.${method.name}(${method.argNames.join(', ')});`;
const getAnyExample = (method) =>
  `any.${method.name}(${method.argNames.join(', ')});`;
const getExpectExample = (method) =>
  `expect(${method.operatesOn}).${method.name}(${method.argNames.join(', ')});`;
const ownerIs = (owner) => (method) => method.owner === owner;

const expectExamples = api
  .filter(ownerIs('expect'))
  .map(getExpectExample)
  .join('\n');
const anyExamples = api
  .filter(ownerIs('any'))
  .map(getAnyExample)
  .join('\n');
const jasmineExpectExamples = jasmineApi
  .filter(ownerIs('expect'))
  .map(getExpectExample)
  .join('\n');
const jasmineAnyExamples = jasmineApi
  .filter(ownerIs('jasmine'))
  .map(getJasmineExample)
  .join('\n');

const nextMatchers = matchers
  .replace('{{DEFAULT_MATCHERS}}', jasmineExpectExamples)
  .replace('{{DEFAULT_ASYMMETRIC_MATCHERS}}', jasmineAnyExamples)
  .replace('{{ADDITIONAL_MATCHERS}}', expectExamples)
  .replace('{{ADDITIONAL_ASYMMETRIC_MATCHERS}}', anyExamples);

const nextReadme = index
  .replace('{{OVERVIEW}}', overview)
  .replace('{{INSTALLATION}}', installation)
  .replace('{{MATCHERS}}', nextMatchers)
  .replace('{{INTEGRATION}}', integration)
  .replace('{{BROWSER_SUPPORT}}', browserSupport);

writeFile(readmePath, nextReadme);
