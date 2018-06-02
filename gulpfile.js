var gulp = require("gulp");
var util = require("gulp-util");
var rename = require("gulp-rename");
var filter = require("gulp-filter");
var sourcemaps = require("gulp-sourcemaps");
var uglifyjs = require("uglify-js");
var composer = require("gulp-uglify/composer");
var pump = require("pump");
var glob = require("glob");
var changeCase = require("change-case");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var fabricator = require("gulp-fabricator");

fabricator.setup({
	name: "Change Case",
	base: {
		directory: __dirname
	}
});

gulp.task("build:js", function(callback) {
	pump([
		browserify({
			entries: glob.sync(fabricator.config.js.source[0]),
			standalone: changeCase.camel(fabricator.config.name),
			debug: true
		})
		.bundle()
		.on("error", util.log.bind(util, "Browserify Error"))
		.pipe(source(changeCase.param(fabricator.config.name) + "-bundled.js").on("error", util.log))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(fabricator.config.js.destination).on("error", util.log))
		.pipe(filter([fabricator.config.js.destination + "*.js", "!*.min.js", "!*.map"]))
		.pipe(rename({ extname: ".min.js" }).on("error", util.log)),
		composer(uglifyjs, console)({ mangle: false }).on("error", util.log),
		gulp.dest(fabricator.config.js.destination).on("error", util.log)
	], callback);
});
