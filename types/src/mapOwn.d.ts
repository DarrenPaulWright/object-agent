declare function _default<Value>(
	object: Value,
	callback?: (value: Value[keyof Value], key: keyof Value) => unknown,
	ignoreKeys?: string[] | string
): Partial<{ [Property in keyof Value]: unknown }>;

export default _default;
