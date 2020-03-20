const path = require("path");

module.exports = {
	mode: "production",
	target: "web",
	entry: "./src/change-case.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "change-case-bundled.min.js",
		library: "changeCase",
		libraryTarget: "umd"
	},
	devtool: "source-map"
};
