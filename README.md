# Change Case Bundled

A browserify bundled web-friendly version of the [change-case](https://github.com/blakeembrey/change-case) module.

## Client-Side Usage

```html
<script src="change-case-bundled.min.js"></script>

<script type="text/javascript">
	changeCase.camel("Nice Meme"); // => "niceMeme"
</script>
```

## Server-Side Usage

```javascript
const changeCase = require("change-case-bundled");

changeCase.camel("Nice Meme"); // => "niceMeme"
```

## Installation

To install this module:
```bash
npm install change-case-bundled
```

## Building

To build this module:
```bash
gulp build
```
or
```bash
npm run build
```
