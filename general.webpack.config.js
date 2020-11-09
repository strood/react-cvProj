// Default setup for alot of basic webpack functionality you may want to add to a
// site, keep in mind that all these packages can be swapped out for a variety of
//  others, including your own custom ones, this is just a default setup from
//  webpack site https://webpack.js.org/guides/

const path = require('path');

// Added in output management, HtmlWebpackPlugin section.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Added to cleanup dist folder
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Added only for dev! dont need below line:
  mode: 'development',
  // mode: 'production', Uncomment when done dev
  // entry: './src/index.js', <----- old setup before print.js
  // adding src/print.js as a new entry point (print) and we'll change the output as
  // well, so that it will dynamically generate bundle names, based on the entry point names:
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },

  // Added a devtool to help with debugging, if error in bundle.js, it will show
  //  the specific file instea dof just the budle when showing error.
  // NOTE: only good for dev, not prod
  devtool: 'inline-source-map',

  // Alternative to using --watch is install devServer.:
  // Below line tells webpack-dev-server to server files from /dist directory on
  //  localhost:8080
  //  run using webpack-dev-server --open or script in package.json $ npm run start
  devServer: {
    contentBase: './dist',
  },
  // NOTE: webpack-dev-server doesn't write any output files after compiling. Instead,
  // it keeps bundle files in memory and serves them as if they were real files
  // mounted at the server's root path. If your page expects to find the bundle
  // files on a different path, you can change this with the publicPath option in
  // the dev server's configuration.

  // Added plugins section on output management for HtmlWebpackPlugin
  // Not included prior to that in basic setup
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List', // < Page title edited here
      // favicon: ".src/img/asdfdfsdfsdf.ico", < ADD FAVICON HERE
    }),
    // Added for second plugin, the option Tells CleanWebpackPlugin that we don't
    // want to remove the index.html file after the incremental build triggered by watch
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  output: {
    // filename: 'bundle.js', <--- changed when we added print.js
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // File loader to include images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        // File loader to include fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        // file loader for csv or tsv files to be added/loaded
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        // file loader for xml files to be added/loaded
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};
