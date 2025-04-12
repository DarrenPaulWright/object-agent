declare function _default(
	object: object,
	callback: (path: string, value: unknown, isCircular: boolean) => boolean | void,
	isOptimistic?: boolean
): boolean;

export default _default;
