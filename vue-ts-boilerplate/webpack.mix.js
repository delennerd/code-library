const mix = require("laravel-mix");
const path = require("path");
require("laravel-mix-copy-watched");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

let webpackConfig = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: { appendTsSuffixTo: [/\.vue$/] },
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
		fallback: {
			stream: require.resolve("stream-browserify"),
			crypto: false,
			buffer: false,
		},
	},
	devtool: false,
	stats: {
		children: false,
	},
};

mix.options({
	processCssUrls: false,
});

mix
	.alias({
		"@app": path.join(__dirname, "src/js"),
		"@components": path.join(__dirname, "src/js/vue/components"),
	})
	.ts("src/js/app.ts", "assets/js/app.js")
	.vue({
		version: 2,
	})
	.extract()
	.js("src/js/customizer.js", "assets/js")
	.vue({ version: 2 })
	.extract();

mix
    .sass("src/sass/app.scss", "assets/css")
    .sass(
        "src/sass/editor.scss",
        "assets/css/editor.css"
    );

mix
    .copyWatched("src/img", "assets/img")
    .copyWatched("src/fonts", "assets/fonts")
    .copyWatched(
        "node_modules/@fortawesome/fontawesome-free/webfonts",
        "assets/fonts"
    )
    .copyWatched("node_modules/bootstrap-icons/font/fonts", "assets/fonts");

if (!mix.inProduction()) {
	webpackConfig.devtool = "inline-source-map";
}

mix.webpackConfig(webpackConfig).sourceMaps();
