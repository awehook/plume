// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
        // exclude: [/node_modules\//]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader?declaration=false',
            options: {
              declaration: false,
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer]
              })
            }
          }
        ]
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' }
          }
        ],
        enforce: 'pre'
      },
      {
        test:/\.(ttf|eot|woff|woff2|svg)$/,
        use:['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@plume-js/editor': path.join(__dirname, '../packages/editor/src/index'),
      '@plume-js/icons': path.join(__dirname, '../packages/icons/index'),
    },
    extensions: ['.tsx', '.ts', '.js']
  }
};
