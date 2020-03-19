# Change Case Bundled

[![NPM version][npm-version-image]][npm-url]
[![Build Status][build-status-image]][build-status-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![Downloads][npm-downloads-image]][npm-url]

A browserify bundled web-friendly version of the [change-case](https://github.com/blakeembrey/change-case) module.

## Client-Side Usage

```html
<script src="change-case-bundled.min.js"></script>

<script type="text/javascript">
	changeCase.camelCase("Nice Meme"); // => "niceMeme"
</script>
```

## Server-Side Usage

```javascript
const changeCase = require("change-case-bundled");

changeCase.camelCase("Door Stuck"); // => "doorStuck"
```

## Installation

To install this module:
```bash
npm install change-case-bundled
```

## Building

To build the distribution files for this module:
```bash
gulp build
```
or
```bash
npm run build
```

[npm-url]: https://www.npmjs.com/package/change-case-bundled
[npm-version-image]: https://img.shields.io/npm/v/change-case-bundled.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/change-case-bundled.svg

[build-status-url]: https://travis-ci.org/nitro404/change-case-bundled
[build-status-image]: https://travis-ci.org/nitro404/change-case-bundled.svg?branch=master

[coverage-url]: https://coveralls.io/github/nitro404/change-case-bundled?branch=master
[coverage-image]: https://coveralls.io/repos/github/nitro404/change-case-bundled/badge.svg?branch=master

[vulnerabilities-url]: https://snyk.io/test/github/nitro404/change-case-bundled?targetFile=package.json
[vulnerabilities-image]: https://snyk.io/test/github/nitro404/change-case-bundled/badge.svg?targetFile=package.json
