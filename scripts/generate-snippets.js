const fs = require('fs');
const path = require('path');
const api = require('./data/api');
const jasmineApi = require('./data/jasmine-api');

const getPath = (location) => path.resolve(__dirname, location);
const readFile = (location) => fs.readFileSync(getPath(location), 'utf8');
const writeFile = (location, data) =>
  fs.writeFileSync(getPath(location), data, 'utf8');
const ownerIs = (owner) => (method) => method.owner === owner;

const es5FunctionStyle = `function() {

}`;

const es6FunctionStyle = `() => {

}`;

const expectSnippet = `
<snippet>
  <content><![CDATA[
expect(OPERATES_ON).NAME(ARG_NAMES);
]]></content>
  <tabTrigger>TAB_TRIGGER</tabTrigger>
  <scope>source.js</scope>
</snippet>
`;

const expectNotSnippet = `
<snippet>
  <content><![CDATA[
expect(OPERATES_ON).not.NAME(ARG_NAMES);
]]></content>
  <tabTrigger>nTAB_TRIGGER</tabTrigger>
  <scope>source.js</scope>
</snippet>
`;

const anySnippet = `
<snippet>
  <content><![CDATA[
any.NAME(ARG_NAMES);
]]></content>
  <tabTrigger>aTAB_TRIGGER</tabTrigger>
  <scope>source.js</scope>
</snippet>
`;

const jasmineAnySnippet = `
<snippet>
  <content><![CDATA[
jasmine.NAME(ARG_NAMES);
]]></content>
  <tabTrigger>jTAB_TRIGGER</tabTrigger>
  <scope>source.js</scope>
</snippet>
`;

const getTabTrigger = (method) => {
  const firstChar = method.name.charAt(0);
  const upperCaseChars = method.name.replace(/[a-z]/g, '');
  return `${firstChar}${upperCaseChars}`.toLowerCase();
};

const getExpectSnippet = (template, method) =>
  template
    .replace('OPERATES_ON', '${1:' + method.operatesOn + '}')
    .replace('NAME', method.name)
    .replace(
      'ARG_NAMES',
      method.argNames
        .map((argName, i) => '${' + (i + 2) + ':' + argName + '}')
        .join(', ')
    )
    .replace('TAB_TRIGGER', getTabTrigger(method));

const getAnySnippet = (template, method) =>
  template
    .replace('NAME', method.name)
    .replace(
      'ARG_NAMES',
      method.argNames
        .map((argName, i) => '${' + (i + 1) + ':' + argName + '}')
        .join(', ')
    )
    .replace('TAB_TRIGGER', getTabTrigger(method));

[
  { functionStyle: es5FunctionStyle, outputDirectory: 'es5-snippets' },
  { functionStyle: es6FunctionStyle, outputDirectory: 'es6-snippets' }
].forEach((snippetBundle) => {
  const { functionStyle } = snippetBundle;
  const { outputDirectory } = snippetBundle;

  api.filter(ownerIs('expect')).forEach((method) => {
    const location = getPath(
      `./${outputDirectory}/${method.name}.sublime-snippet`
    );
    writeFile(location, getExpectSnippet(expectSnippet, method));
    const notLocation = getPath(
      `./${outputDirectory}/not-${method.name}.sublime-snippet`
    );
    writeFile(notLocation, getExpectSnippet(expectNotSnippet, method));
  });

  api.filter(ownerIs('any')).forEach((method) => {
    const location = getPath(
      `./${outputDirectory}/any-${method.name}.sublime-snippet`
    );
    writeFile(location, getAnySnippet(anySnippet, method));
  });

  jasmineApi.filter(ownerIs('jasmine')).forEach((method) => {
    const location = getPath(
      `./${outputDirectory}/jasmine-${method.name}.sublime-snippet`
    );
    writeFile(location, getAnySnippet(jasmineAnySnippet, method));
  });

  jasmineApi.filter(ownerIs('expect')).forEach((method) => {
    const location = getPath(
      `./${outputDirectory}/${method.name}.sublime-snippet`
    );
    writeFile(location, getExpectSnippet(expectSnippet, method));
    const notLocation = getPath(
      `./${outputDirectory}/not-${method.name}.sublime-snippet`
    );
    writeFile(notLocation, getExpectSnippet(expectNotSnippet, method));
  });

  fs.readdirSync(getPath('./base-snippets')).forEach((file) => {
    const location = getPath(`./${outputDirectory}/${file}`);
    const contents = readFile(`./base-snippets/${file}`).replace(
      'FUNCTION_STYLE',
      functionStyle
    );
    writeFile(location, contents);
  });
});
