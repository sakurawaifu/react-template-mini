module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-less',
  rules: {
    'declaration-empty-line-before': null,
    'color-no-invalid-hex': true,
    'color-named': 'never'
  }
}
