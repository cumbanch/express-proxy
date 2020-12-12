module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "project": './tsconfig.json'
  },
  env: {
    "node": true,
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    "prettier/@typescript-eslint",
  ],
  'rules': {
    "prettier/prettier": ["error", {printWidth: 110, singleQuote: true}],
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "warn",
    "no-control-regex": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", 10],
    "consistent-return": "error",
    "default-case": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", {boolean: false}],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "yoda": "error",
    "no-delete-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "array-bracket-spacing": "error",
    "block-spacing": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "eol-last": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": "error",
    "max-depth": "error",
    "max-lines": "error",
    "max-params": ["error", 4],
    "max-statements": ["error", {max: 30}],
    "max-statements-per-line": "error",
    "new-parens": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", {max: 2, maxEOF: 1}],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {allowAllPropertiesOnSameLine: true}
    ],
    "one-var-declaration-per-line": "error",
    "operator-linebreak": [
      "error",
      "after",
      {overrides: {"?": "before", ":": "before"}}
    ],
    "padded-blocks": ["error", "never"],
    "prefer-object-spread": "error",
    "quotes": ["error", "single", {avoidEscape: true}],
    "semi-spacing": ["error", {before: false, after: true}],
    "semi-style": "error",
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {words: true, nonwords: false}],
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "off", // conflicts with prettier
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", {before: true, after: true}],
    "curly": ["error", "multi-line"],
    "global-require": "error",
    "max-nested-callbacks": 0,
    "one-var": ["error", "never"],
    "brace-style": "off",
    "camelcase": "off",
    "class-name-casing": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "init-declarations": "off",
    "lines-between-class-members": "off",
    "no-array-constructor": "off",
    "no-extra-parens": "off",
    "no-magic-numbers": "off",
    "no-empty-function": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "prefer-destructuring": "off",
    "quote-props": ["error", "consistent"],
    "id-length": ["error", {"max": 40, "min": 1}],
    "space-before-function-paren": "off",
    "new-cap": "off",
    "semi": "off",
    "require-atomic-updates": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/array-type": ["error", {"default": "array"}],
    "@typescript-eslint/brace-style": ["error", "1tbs", {"allowSingleLine": true}],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": ["error", {"allowSingleExtends": false}],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": ["error", {"allowDefinitionFiles": true}],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": ["error", {"vars": "all", "args": "after-used", "ignoreRestSiblings": false}],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
  }
};