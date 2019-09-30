// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { useBuiltIns: false }],
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
  };
};
