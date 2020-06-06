module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', {code: 150}],
    'no-console': 'off',
    'no-tabs': 'off',
    'react/require-default-props': 'off',
    'no-restricted-globals': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-void': 'off',
  },
  globals: {
    fetch: false,
    __DEV__: true,
    isNaN: true,
    alert: true,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
