# Change Case Bundled

[![NPM version][npm-version-image]][npm-url]
[![Build Status][build-status-image]][build-status-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Downloads][npm-downloads-image]][npm-url]
[![Install Size][install-size-image]][install-size-url]
[![Contributors][contributors-image]][contributors-url]
[![Pull Requests Welcome][pull-requests-image]][pull-requests-url]

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
gulp browserify
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

[dependencies-url]: https://david-dm.org/nitro404/change-case-bundled
[dependencies-image]: https://img.shields.io/david/nitro404/change-case-bundled.svg

[install-size-url]: https://packagephobia.now.sh/result?p=change-case-bundled
[install-size-image]: https://badgen.net/packagephobia/install/change-case-bundled

[contributors-url]: https://github.com/nitro404/change-case-bundled/graphs/contributors
[contributors-image]: https://img.shields.io/github/contributors/nitro404/change-case-bundled.svg

[pull-requests-url]: https://github.com/nitro404/change-case-bundled/pulls
[pull-requests-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
