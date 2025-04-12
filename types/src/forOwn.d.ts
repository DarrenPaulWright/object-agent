declare function _default<Value extends object>(
	object: Value,
	callback: (value: Value[keyof Value], key: keyof Value) => boolean
): boolean;

export default _default;
