module.exports = {
  // presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: ['@babel/transform-runtime', 'babel-plugin-transform-import-meta'],
};
