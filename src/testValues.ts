export const testSimpleValues: Array<unknown> = [
	undefined,
	null,
	NaN,
	'test',
	'3',
	0,
	-0,
	3,
	10,
	true,
	false,
	/test/gu,
	/test/giu,
	/^test/gimu,
	new RegExp('test', 'u'), // eslint-disable-line prefer-regex-literals
	new Date('01/01/2000'),
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	(): void => {
	},
	{},
	[],
	['test3', 'test1', 'test2'],
	{
		key1: 'test1'
	},
	{
		key1: 'test1',
		key2: 'test2'
	}
];

export const testValues: Array<unknown> = testSimpleValues.concat([
	['test1', 'test2', 'test3'],
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: 'test'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test4'],
		four: {
			sub: 'test'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2', 'test3'],
		four: {
			sub: 'test5'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: 'test5'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: null
		}
	}
]);
