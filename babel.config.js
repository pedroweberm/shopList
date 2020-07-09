module.exports = {
  presets: ['module:metro-react-native-babel-preset', "module:react-native-dotenv"],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
