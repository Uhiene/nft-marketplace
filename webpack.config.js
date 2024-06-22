module.exports = {
    // Other webpack config options...
    module: {
      rules: [
        // Other loaders...
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
  