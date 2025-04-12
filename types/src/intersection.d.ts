declare function _default<Value>(...args: Value[][]): Value[];
declare function _default<Value>(...args: Value[]): Partial<Value>;
declare function _default<Value>(...args: (Value | Value[])[]): Value[] | Partial<Value>;

export default _default;
