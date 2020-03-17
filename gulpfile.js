const gulp = require("gulp");
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
const fabricator = require("gulp-fabricator");

fabricator.setup({
	name: "Change Case",
	js: {
		source: ["src/change-case.js"]
	},
	base: {
		directory: __dirname
	}
});

gulp.task("browserify", function(callback) {
	pump([
		browserify({
			entries: glob.sync(fabricator.config.js.source[0]),
			standalone: changeCase.camelCase(fabricator.config.name),
			debug: true
		})
		.bundle()
		.pipe(source(changeCase.paramCase(fabricator.config.name) + "-bundled.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(fabricator.config.js.destination))
		.pipe(filter([fabricator.config.js.destination + "*.js", "!*.min.js", "!*.map"]))
		.pipe(rename({ extname: ".min.js" })),
		composer(uglifyjs, console)({ mangle: false }),
		gulp.dest(fabricator.config.js.destination)
	], callback);
});
