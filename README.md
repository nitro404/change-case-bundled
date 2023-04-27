# Change Case Bundled

[![NPM version][npm-version-image]][npm-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![Downloads][npm-downloads-image]][npm-url]
[![Install Size][install-size-image]][install-size-url]
[![Contributors][contributors-image]][contributors-url]
[![Pull Requests Welcome][pull-requests-image]][pull-requests-url]

A browserify bundled web-friendly version of the [change-case](https://github.com/blakeembrey/change-case) module with other case utilities included.

## Documentation

View the original documentation [here](https://github.com/blakeembrey/change-case).

## Web Usage

```html
<script src="change-case-bundled.min.js"></script>

<script type="text/javascript">
	changeCase.camelCase("Nice Meme"); // => "niceMeme"
</script>
```

## Node.js Usage

```javascript
const changeCase = require("change-case-bundled");

changeCase.pascalCase("Door Stuck"); // => "DoorStuck"
```

## Installation

To install this module:
```bash
npm install change-case-bundled
```

## Building

To build the distribution files for this module:
```bash
npm run build
```

[npm-url]: https://www.npmjs.com/package/change-case-bundled
[npm-version-image]: https://img.shields.io/npm/v/change-case-bundled.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/change-case-bundled.svg

[coverage-url]: https://coveralls.io/github/nitro404/change-case-bundled?branch=master
[coverage-image]: https://coveralls.io/repos/github/nitro404/change-case-bundled/badge.svg?branch=master

[vulnerabilities-url]: https://snyk.io/test/github/nitro404/change-case-bundled?targetFile=package.json
[vulnerabilities-image]: https://snyk.io/test/github/nitro404/change-case-bundled/badge.svg?targetFile=package.json

[install-size-url]: https://packagephobia.now.sh/result?p=change-case-bundled
[install-size-image]: https://badgen.net/packagephobia/install/change-case-bundled

[contributors-url]: https://github.com/nitro404/change-case-bundled/graphs/contributors
[contributors-image]: https://img.shields.io/github/contributors/nitro404/change-case-bundled.svg

[pull-requests-url]: https://github.com/nitro404/change-case-bundled/pulls
[pull-requests-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
