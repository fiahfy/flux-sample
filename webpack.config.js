module.exports = {
  entry: './client/assets/js/AppBootstrap.js',
  output: {
    filename: './client/assets/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  // devServer: {
  //   proxy: {
  //     '/assets': {
  //       target: 'http://localhost:3000',
  //       secure: false,
  //       // bypass: function(req, res, proxyOptions) {
  //       //   if (req.headers.accept.indexOf('html') !== -1) {
  //       //       console.log('Skipping proxy for browser request.');
  //       //       return '/index.html';
  //       //   }
  //       // },
  //     },
  //   },
  // }
};
