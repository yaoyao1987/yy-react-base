module.exports = {
  extends: ['stylelint-config-standard', './node_modules/prettier-stylelint/config.js'],
  rules: {
    'comment-empty-line-before': null,
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'function-calc-no-invalid': null,
  },
  ignoreFiles: ['node_modules/**/*', 'dist', 'lib', 'es'],
}
