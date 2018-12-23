# Contributing

## Installation

1. Download `node` at [nodejs.org](http://nodejs.org) and install it, if you
   haven't already.
1. Clone the repo.

```sh
git clone https://github.com/JamieMason/Jasmine-Matchers.git
cd Jasmine-Matchers
```

1. Install dependencies.

```sh
npm install
```

## Adding Matchers

Please first
[open an issue](https://github.com/JamieMason/Jasmine-Matchers/issues/new) so
the idea can be discussed, there are other matcher libraries so this one may not
be the best fit. Appropriate matchers are those that are likely to be useful to
the majority of Developers, ie. not those which apply only to users of a
particular library or framework.

Once agreed, the steps at the time of writing are as follows;

- Run `npm run watch` to build and test on each file change
- Create `test/<matcherName>.spec.js`
- Create `src/<matcherName>.js`
- Add `<matcherName>: require('./<matcherName>'),` to the `matcher` object in
  `src/api.js`
- Add the new matcher to `README.md`
- Run `npm run build` to generate `dist/*.js`

## Running Tests

Running `npm run test:local` will run the test suite in Chrome and
`npm run test:jest` will do the same in Node.js, this is enough for initial
development locally.

Before any changes are released, the test suite is runs in hundreds of
browser/version combinations using
[Browserstack](https://www.browserstack.com/).

## Writing Tests

Please take some time to
[review the existing tests](https://github.com/JamieMason/Jasmine-Matchers/tree/master/test)
to get a feel for what would be considered consistent with the rest of the
project.

## Coding Style

This project uses
[xo: Happiness JavaScript linter](https://github.com/sindresorhus/xo) and can be
linted and formatted by running;

```sh
npm run lint
```

## Commit Message Format

There are very precise rules over how our git commit messages can be formatted.
This leads to more readable messages that are easy to follow when looking
through the project history, but also allows us to generate the CHANGELOG.md.

Each commit message consists of a **header**, a **body** and a **footer**. The
header has a special format that includes a **type**, a **scope** and a
**subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message should not be longer 100 characters, this allows
the message to be easier to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code
          (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug or adds a feature
perf:     A code change that improves performance
test:     Adding missing tests
chore:    Changes to the build process or auxiliary tools
          and libraries such as documentation generation
```

### Scope

The scope could be anything specifying which part or aspect of the project
changed. For example `logging`, `npm`, `readme`, `release`, `shell`,
`shrinkpack`, `shrinkwrap`, `tests`, `workflow`, etc...

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not
"changed" nor "changes".

The body should include the motivation for the change and contrast this with
previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also
the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space
or two newlines. The rest of the commit message is then used for this.
