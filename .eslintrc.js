module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'padding-line-between-statements': ['error', {
      blankLine: 'always', prev: '*', next: 'return'
    }],
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
    camelcase: 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'no-plusplus': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
