const gulp = require("gulp");
const util = require("gulp-util");
const rename = require("gulp-rename");
const filter = require("gulp-filter");
const sourcemaps = require("gulp-sourcemaps");
const uglifyjs = require("uglify-js");
const composer = require("gulp-uglify/composer");
const pump = require("pump");
const glob = require("glob");
const changeCase = require("change-case");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

var config = {
	name: "Change Case",
	paths: {
		js: {
			source: ["src/**/*.js"],
			destination: "dist/",
		}
	}
};

gulp.task("build:js", function(callback) {
	pump([
		browserify({
			entries: glob.sync(config.paths.js.source[0]),
			standalone: changeCase.camel(config.name),
			debug: true
		})
		.bundle()
		.on("error", util.log.bind(util, "Browserify Error"))
		.pipe(source(changeCase.param(config.name) + "-bundled.js").on("error", util.log))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(config.paths.js.destination).on("error", util.log))
		.pipe(filter([config.paths.js.destination + "*.js", "!*.min.js", "!*.map"]))
		.pipe(rename({ extname: ".min.js" }).on("error", util.log)),
		composer(uglifyjs, console)({ mangle: false }).on("error", util.log),
		gulp.dest(config.paths.js.destination).on("error", util.log)
	], callback);
});

gulp.task("build", ["build:js"]);
