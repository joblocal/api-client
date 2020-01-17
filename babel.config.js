const isTest = process.env.NODE_ENV === 'test';

module.exports = function create(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        isTest
          ? {
            targets: {
              node: 'current',
            },
          }
          : {
            targets: {
              browsers: ['last 2 versions', 'IE >= 11'],
            },
          },
      ],
    ],
  };
};
