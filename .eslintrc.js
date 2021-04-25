module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        bracketSpacing: false,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
};
