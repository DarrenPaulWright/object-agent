export type NotObject = string | number | boolean | null | undefined | symbol | bigint;

type Depth = [1, 2, 3, 4, 5, 6, 7, 8, 9, never];
type ArrayDepth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type PathAtDepth<Type, D extends number = 0> = [D] extends [never] ?
	never :
	Type extends Array<unknown> ?
	`${ ArrayDepth }` | (PathAtDepth<Type[ArrayDepth], Depth[D]> extends infer Rest ?
		Rest extends string | number ?
			`${ ArrayDepth }.${ Rest }` :
			never :
		never) :
		Type extends object ?
			({
				[Key in keyof Type & (string | number)]: Key extends string | number ?
				`${ Key }` | (PathAtDepth<Type[Key], Depth[D]> extends infer Rest ?
					Rest extends string | number ?
						`${ Key }.${ Rest }` :
						never :
					never) :
					never
			}[keyof Type & (string | number)]) :
			never;

export type PathOf<Type> = '' | PathAtDepth<Type>;

export type TypeAtPath<Type, Path extends string> =
	Path extends '' ? Type :
		Path extends `${ infer Head }.${ infer Tail }` ?
			Head extends keyof Type ?
				TypeAtPath<Type[Head], Tail> :
				Head extends `${ number }` ?
					number extends keyof Type ?
						TypeAtPath<Type[number], Tail> :
						never :
					never :
			Path extends keyof Type ?
				Type[Path] :
				Path extends `${ number }` ?
					number extends keyof Type ?
						Type[number] :
						never :
					never;

export type RequiredKeys<Type> = {
	[Key in keyof Type]-?: object extends Pick<Type, Key> ? never : Key
}[keyof Type];

export type OptionalKeys<Type> = {
	[Key in keyof Type]-?: undefined extends Type[Key] ? Key : never
}[keyof Type];

export type KeysOfValue<Type, TCondition> = keyof Type & {
	[Key in keyof Type]: Type[Key] extends TCondition ? Key : never;
}[keyof Type];
