const lexerParams = {
  lexer: 'JsxLexer',
  functions: ['_', 't']
};

module.exports = {
  contextSeparator: '_',
  createOldCatalogs: true,
  defaultNamespace: 'common',
  defaultValue: '',
  indentation: 2,
  keepRemoved: false,
  keySeparator: '.',
  locales: ['uz', 'oz', 'ru', 'en'],
  lexers: {
    tsx: [lexerParams],
    ts: [lexerParams]
  },
  lineEnding: 'auto',
  namespaceSeparator: ':',
  output: 'src/translations/$LOCALE.json',
  input: ['../../src/**/*.{tsx,ts}', '!../../src/**/*.{spec,testing}.{tsx,ts}', '!../../src/**/testing/**'],
  reactNamespace: true,
  sort: true,
  skipDefaultValues: false,
  useKeysAsDefaultValue: false,
  verbose: false,
  failOnWarnings: false,
  customValueTemplate: null
};
