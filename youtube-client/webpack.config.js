const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
};
