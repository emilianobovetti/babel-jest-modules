# babel-jest-modules

<div align="center">
  <a href="https://travis-ci.org/emilianobovetti/babel-jest-modules" target="_blank">
    <img src="https://travis-ci.org/emilianobovetti/babel-jest-modules.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://snyk.io/test/github/emilianobovetti/babel-jest-modules?targetFile=package.json">
    <img src="https://snyk.io/test/github/emilianobovetti/babel-jest-modules/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/emilianobovetti/babel-jest-modules?targetFile=package.json" style="max-width:100%;">
  </a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release">
  </a>
</div>

When `"type": "module"` is present in a `package.json` node assumes every `.js` files in that directory tree is an ES module, then it must be imported with es6 `import`.

While [babel configuration](https://babeljs.io/docs/en/config-files) lets you use `.babelrc.cjs`/`babel.config.cjs` or a "babel" key in your `package.json`, [babel-jest](https://www.npmjs.com/package/babel-jest) seems to read exclusively `babel.config.js`.

This package should let you use jest and ES modules with the following setup:

```sh
yarn add --dev jest @babel/core @babel/preset-env babel-jest-modules
```

### package.json

```json
{
  "type": "module",
  "jest": {
    "transform": {
      "^.*\\.js$": "babel-jest-modules"
    }
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
```
