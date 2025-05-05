interface MultiArgs {
	<Type extends Array<unknown>>(args: [Type]): Type;

	<Type>(args: Array<Type>): Array<Type>;

	(args: Array<unknown>): unknown;
}

const multiArgs: MultiArgs = <Type>(args: Array<Type> | Array<Array<Type>>): Type | Array<Type> => {
	return args.length === 1 ?
		args[0] :
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		args as Array<Type>;
};

export default multiArgs;
