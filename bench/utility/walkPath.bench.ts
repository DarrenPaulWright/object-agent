import { bench, describe } from 'hippogriff';
import { walkPath } from '../../index.js';

const walkPathFor = (
	path: string,
	callback: (key: string, tail: string) => unknown,
	separator = '.'
): void => {
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

const walkPathWhile = (
	path: string,
	callback: (key: string, tail: string) => unknown,
	separator = '.'
): void => {
	let runningPath = path;

	while (runningPath !== '') {
		const offset = runningPath.indexOf(separator);

		switch (offset) {
			case -1: {
				callback(runningPath, '');

				return;
			}

			case 0: {
				runningPath = runningPath.slice(offset + 1);
				break;
			}

			default: {
				if (
					callback(
						runningPath.slice(0, offset),
						runningPath = runningPath.slice(offset + 1)
					)
				) {
					return;
				}
			}
		}
	}
};

const walkPathRecursive = (
	path: string,
	callback: (key: string, tail: string) => unknown,
	separator = '.'
): void => {
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

const walkPathSplitArray = (
	path: string,
	callback: (key: string, tail: string) => unknown,
	separator = '.'
): void => {
	let runningPath = path;
	const keys = path.split(separator);

	for (let index = 0; index < keys.length; index++) {
		if (
			keys[index] !== '' &&
			callback(
				keys[index],
				runningPath = runningPath.slice(keys[index].length + 1)
			)
		) {
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
		describe(data.name, () => {
			// @ts-expect-error unused var
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			let sandbox = '';

			const thing = data.function;

			bench('single item path', () => {
				thing('one', (_key, path) => {
					sandbox = path;
				});
			});

			bench('multi item path', () => {
				thing('one.two.three', (_key, path) => {
					sandbox = path;
				});
			});
		});
	});
