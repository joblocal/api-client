module.exports = function create(api) {
  return {
    presets: [
      [
        '@babel/preset-env',
        api.env('test')
          ? {
            targets: {
              node: 'current',
            },
          }
          : {
            targets: {
              browsers: ['last 2 versions', 'IE >= 11'],
            },
            corejs: '3.6',
            useBuiltIns: 'usage',
          },
      ],
    ],
  };
};
