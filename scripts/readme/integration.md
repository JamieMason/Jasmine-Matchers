## Integration

### Browser

Embed
[jasmine-matchers.js](https://github.com/JamieMason/Jasmine-Matchers/blob/master/dist/jasmine-matchers.js)
after Jasmine but before your tests.

### Jest

Include the following in your `package.json`;

```json
"unmockedModulePathPatterns": ["jasmine-expect"]
```

And the following at the top of your test suite;

```javascript
import JasmineExpect from 'jasmine-expect';
```

### Karma

Integration is easy with the
[karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers)
plugin.

### Node.js

Use the [Jasmine CLI](https://www.npmjs.com/package/jasmine) and include the
path to where Jasmine Matchers is installed in the `helpers` array of your
`spec/support/jasmine.json`.

```json
{
  "spec_dir": "spec",
  "spec_files": ["../src/**/*.spec.js"],
  "helpers": ["../node_modules/jasmine-expect/index.js"],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```

### TypeScript and Angular CLI Projects

If you are using TypeScript, you might want to
`npm install @types/jasmine-expect --save-dev` in order to prevent your IDE from
complaining about the new Matchers.

Also, if you run into TypeScript compilation errors when running your tests, add
`"jasmine-expect"` to the `"types"` array in your tests' `tsconfig` file.

As an example, for an Angular CLI based project, this would be your
`tsconfig.spec.json` file:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/spec",
    "baseUrl": "./",
    "module": "commonjs",
    "target": "es5",
    "types": ["jasmine", "node", "jasmine-expect"]
  },
  "files": ["test.ts"],
  "include": ["**/*.spec.ts", "**/*.d.ts"]
}
```

### Sublime Text

[Jasmine-Matchers-Snippets](https://github.com/JamieMason/Jasmine-Matchers-Snippets)
or
[Jasmine-Matchers-ES6-Snippets](https://github.com/JamieMason/Jasmine-Matchers-ES6-Snippets)
can be installed with
[Package Control](https://packagecontrol.io/packages/Jasmine%20Matchers%20Snippets)
to ease development with Jasmine Matchers in Sublime Text.

### Tern

There is a [Plugin](https://github.com/ik9999/tern-jasminematchers) for
[Tern](https://github.com/ternjs/tern) to auto-complete matchers in your Text
Editor.
