export const testValues = [
	undefined,
	null,
	{},
	[],
	/test/,
	new RegExp('something'),
	3,
	true,
	false,
	new Date(),
	() => {
	},
	['test1', 'test2', 'test3'],
	['test3', 'test1', 'test2'],
	{
		key1: 'test1'
	},
	{
		key1: 'test1',
		key2: 'test2'
	},
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
];
