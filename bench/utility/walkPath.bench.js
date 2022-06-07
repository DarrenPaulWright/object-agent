import { benchSettings } from 'karma-webpack-bundle';
import { walkPath } from '../../index.js';

const walkPathFor = (path, callback, separator = '.') => {
	for (let currentOffset = 0; currentOffset !== path.length;) {
		const nextOffset = path.indexOf(separator, currentOffset);

		if (nextOffset === -1) {
			callback(currentOffset === 0 ? path : path.slice(currentOffset), '');
			return;
		}

		if (
			currentOffset !== nextOffset &&
			callback(path.slice(currentOffset, nextOffset), path.slice(nextOffset + 1))
		) {
			return;
		}

		currentOffset = nextOffset + 1;
	}
};

const walkPathWhile = (path, callback, separator = '.') => {
	while (path !== '') {
		const offset = path.indexOf(separator);

		switch (offset) {
			case -1:
				callback(path, '');
				return;
			case 0:
				path = path.slice(offset + 1);
				break;
			default:
				if (callback(path.slice(0, offset), path = path.slice(offset + 1))) {
					return;
				}
		}
	}
};

const walkPathRecursive = (path, callback, separator = '.') => {
	if (path !== '') {
		const offset = path.indexOf(separator);

		if (offset === -1) {
			callback(path, '');
		}
		else {
			const tail = path.slice(offset + 1);

			if (offset === 0 || callback(path.slice(0, offset), tail) !== true) {
				walkPathRecursive(tail, callback, separator);
			}
		}
	}
};

const walkPathSplitArray = (path, callback, separator = '.') => {
	const keys = path.split(separator);

	for (let index = 0; index < keys.length; index++) {
		if (keys[index] !== '' && callback(keys[index], path = path.slice(keys[index].length + 1))) {
			break;
		}
	}
};

[{
	name: 'walkPath',
	function: walkPath
}, {
	name: 'walkPath: Keep full path',
	function: walkPathFor
}, {
	name: 'walkPath: Shorten path each step',
	function: walkPathWhile
}, {
	name: 'walkPath: Recursive',
	function: walkPathRecursive
}, {
	name: 'walkPath: Split array',
	function: walkPathSplitArray
}]
	.forEach((data) => {
		suite(data.name, () => {
			let sandbox = '';
			const thing = data.function;

			benchmark('single item path', () => {
				thing('one', (key, path) => {
					sandbox = path;
				});
			}, benchSettings);

			benchmark('multi item path', () => {
				thing('one.two.three', (key, path) => {
					sandbox = path;
				});
			}, benchSettings);
		});
	});
