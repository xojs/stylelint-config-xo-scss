import postcssScss from 'postcss-scss';

const reLowercase = /^[a-z]+(-[a-z\d]+)*$/;

const config = {
	extends: 'stylelint-config-xo',
	customSyntax: postcssScss,
	plugins: [
		'stylelint-scss',
	],
	rules: {
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': null,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: [
					'use',
				],
			},
		],
		'property-no-unknown': null,

		'scss/at-each-key-value-single-line': true,
		'scss/at-else-if-parentheses-space-before': 'always',
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-function-pattern': reLowercase,
		'scss/at-if-no-null': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-mixin-argumentless-call-parentheses': 'never',
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-mixin-pattern': reLowercase,
		'scss/at-root-no-redundant': true,
		'scss/at-rule-conditional-no-parentheses': true,
		'scss/at-rule-no-unknown': true,
		'scss/at-use-no-unnamespaced': true,
		// Disabled because of https://github.com/stylelint-scss/stylelint-scss/issues/172#issuecomment-363594714
		// 'scss/dollar-variable-colon-newline-after': 'always-multi-line',
		'scss/dollar-variable-colon-space-after': 'always-single-line',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-no-namespaced-assignment': true,
		'scss/dollar-variable-pattern': reLowercase,
		'scss/percent-placeholder-pattern': reLowercase,
		// Disabled because of https://github.com/kristerkari/stylelint-scss/issues/202
		// 'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dimension-no-non-numeric-values': true,
		'scss/function-color-relative': true,
		'function-no-unknown': null,
		'scss/function-no-unknown': true,
		'scss/function-quote-no-quoted-strings-inside': true,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/operator-no-unspaced': true,
		'scss/partial-no-import': true,
		'scss/selector-no-redundant-nesting-selector': true,
		'scss/no-duplicate-dollar-variables': true,
		'scss/no-duplicate-mixins': true,
		'scss/property-no-unknown': true,
		'scss/at-use-no-redundant-alias': true,
		'scss/function-calculation-no-interpolation': true,
		'scss/block-no-redundant-nesting': true,
		'scss/load-no-partial-leading-underscore': true,
		'scss/no-unused-private-members': true,
	},
};

export default config;
