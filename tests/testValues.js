export const testSimpleValues = [
	undefined,
	null,
	NaN,
	'test',
	'3',
	/test/g,
	/test/gi,
	/test/gim,
	new RegExp('test'),
	3,
	10,
	true,
	false,
	new Date(),
	new Date('01/01/2000'),
	() => {
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
export const testValues = testSimpleValues.concat([
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
