declare function _default(length: number): Array<number>;
declare function _default<Value>(length: number, callback: (index: number) => Value): Array<Value>;
declare function _default<Value>(
	length: number,
	callback?: (index: number) => Value
): Array<Value>;

export default _default;
