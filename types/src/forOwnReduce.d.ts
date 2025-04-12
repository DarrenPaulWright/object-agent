declare function _default<ReturnValue, Value extends object>(
	object: Value,
	callback: (value: Value[keyof Value], key: keyof Value) => boolean,
	initialValue: ReturnValue
): ReturnValue;

export default _default;
