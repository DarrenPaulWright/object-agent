import { lucidBrowser, lucidNode } from 'eslint-config-lucid';
import lucidTypescriptConfig from 'eslint-config-lucid-typescript';

export default [
	{
		ignores: [
			'**/*.js',
			'**/*.cjs',
			'**/*.d.ts'
		]
	},
	lucidBrowser,
	...lucidNode,
	...lucidTypescriptConfig,
	{
		files: [
			'**/*.bench.ts',
			'**/*.test.ts'
		],
		rules: {
			'@typescript-eslint/no-empty-function': 'off',
			'consistent-return': 'off',
			'no-confusing-void-expression': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'max-classes-per-file': 'off'
		}
	}
];
