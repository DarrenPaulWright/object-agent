import get from './get.js';
import mapOwn from './mapOwn.js';
import set from './set.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

interface ICloneSettings {
	ignoreKeys?: Array<string | number | symbol>;
	isCircular?: boolean;
}

interface ICloneInternalSettings extends ICloneSettings {
	objectRefs: Map<unknown, string>;
	circularRefs: Array<[string, string]>;
}

const cloneObject = <Type extends object>(
	value: Type,
	path: string,
	settings: ICloneInternalSettings
): Type => {
	if (settings.isCircular) {
		if (settings.objectRefs.has(value)) {
			settings.circularRefs.push([path, settings.objectRefs.get(value)!]);

			return value;
		}

		settings.objectRefs.set(value, path);
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return mapOwn(value, (innerValue, key) => {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return doClone(innerValue, appendToPath(path, key), settings);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	}, settings.ignoreKeys as Array<keyof typeof value>) as Type;
};

const doClone = <Type>(
	value: Type,
	path: string,
	settings: ICloneInternalSettings
): Type => {
	if (value instanceof Date) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		return new Date(value.valueOf()) as Type;
	}

	if (value instanceof RegExp) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		return new RegExp(value) as Type;
	}

	if (isObject(value)) {
		return cloneObject(value, path, settings);
	}

	if (isArray(value)) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		return value.map((innerValue: unknown, index) => {
			return doClone(innerValue, appendToPath(path, index), settings);
		}) as Type;
	}

	return value;
};

/**
 * Deep clone a value.
 *
 * @example
 * ``` javascript
 * import { clone } from 'object-agent';
 *
 * clone({ a: 'b', c: 'd' });
 * // => { a: 'b', c: 'd' }
 * ```
 */
const clone = <Type>(value: Type, settings: ICloneSettings = {}): Type => {
	const internalSettings: ICloneInternalSettings = {
		isCircular: false,
		ignoreKeys: [],
		...settings,
		objectRefs: new Map(),
		circularRefs: []
	};

	const result = doClone(value, '', internalSettings);

	if (internalSettings.isCircular) {
		// eslint-disable-next-line no-useless-assignment
		let reference: [string, string] = ['', ''];

		for (let index = 0; index < internalSettings.circularRefs.length; index++) {
			reference = internalSettings.circularRefs[index];

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			set(
				result,
				reference[0],
				get(result, reference[1])
			);
		}

		internalSettings.objectRefs.clear();
		internalSettings.circularRefs = [];
	}

	return result;
};

export default clone;
