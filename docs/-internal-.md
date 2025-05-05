[**object-agent**](README.md)

***

[object-agent](README.md) / \<internal\>

# \<internal\>

## Interfaces

### Get()

Defined in: [src/get.ts:4](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L4)

#### Call Signature

```ts
Get<Type>(object: Type, path: ""): Type;
```

Defined in: [src/get.ts:5](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L5)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `path` | `""` |

##### Returns

`Type`

#### Call Signature

```ts
Get<Type>(object: Type, path: string): Type;
```

Defined in: [src/get.ts:7](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L7)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* [`NotObject`](#notobject) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `path` | `string` |

##### Returns

`Type`

#### Call Signature

```ts
Get<Type>(object: Type, path: PathOf<Type>): 
  | TypeAtPath<Type, PathOf<Type>>
  | undefined;
```

Defined in: [src/get.ts:9](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L9)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `path` | [`PathOf`](README.md#pathof)\<`Type`\> |

##### Returns

  \| [`TypeAtPath`](README.md#typeatpath)\<`Type`, [`PathOf`](README.md#pathof)\<`Type`\>\>
  \| `undefined`

#### Call Signature

```ts
Get(object: unknown, path: string): unknown;
```

Defined in: [src/get.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L14)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `unknown` |
| `path` | `string` |

##### Returns

`unknown`

#### Call Signature

```ts
Get(object: undefined, path: string): undefined;
```

Defined in: [src/get.ts:16](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L16)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `undefined` |
| `path` | `string` |

##### Returns

`undefined`

***

### ICloneSettings

Defined in: [src/clone.ts:8](https://github.com/DarrenPaulWright/object-agent/blob/main/src/clone.ts#L8)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ignorekeys"></a> `ignoreKeys?` | (`string` \| `number` \| `symbol`)[] | [src/clone.ts:9](https://github.com/DarrenPaulWright/object-agent/blob/main/src/clone.ts#L9) |
| <a id="iscircular"></a> `isCircular?` | `boolean` | [src/clone.ts:10](https://github.com/DarrenPaulWright/object-agent/blob/main/src/clone.ts#L10) |

***

### Mix()

Defined in: [src/mix.ts:3](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L3)

#### Call Signature

```ts
Mix<Type>(...args: [Type[]]): [Type][];
```

Defined in: [src/mix.ts:4](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L4)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`Type`[]\] |

##### Returns

\[`Type`\][]

#### Call Signature

```ts
Mix<Type1, Type2>(...args: [Type1[], Type2[]]): [Type1, Type2][];
```

Defined in: [src/mix.ts:8](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L8)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`Type1`[], `Type2`[]\] |

##### Returns

\[`Type1`, `Type2`\][]

#### Call Signature

```ts
Mix<Type1, Type2, Type3>(...args: [Type1[], Type2[], Type3[]]): [Type1, Type2, Type3][];
```

Defined in: [src/mix.ts:12](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L12)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |
| `Type3` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`Type1`[], `Type2`[], `Type3`[]\] |

##### Returns

\[`Type1`, `Type2`, `Type3`\][]

#### Call Signature

```ts
Mix<Type1, Type2, Type3, Type4>(...args: [Type1[], Type2[], Type3[], Type4[]]): [Type1, Type2, Type3, Type4][];
```

Defined in: [src/mix.ts:16](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L16)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |
| `Type3` |
| `Type4` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`Type1`[], `Type2`[], `Type3`[], `Type4`[]\] |

##### Returns

\[`Type1`, `Type2`, `Type3`, `Type4`\][]

#### Call Signature

```ts
Mix<Type>(...args: Type[][]): Type[][];
```

Defined in: [src/mix.ts:20](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L20)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Type`[][] |

##### Returns

`Type`[][]

#### Call Signature

```ts
Mix(...args: unknown[][]): unknown[][];
```

Defined in: [src/mix.ts:22](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L22)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[][] |

##### Returns

`unknown`[][]

***

### NestedEach()

Defined in: [src/nestedEach.ts:24](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L24)

#### Call Signature

```ts
NestedEach<Type>(
   arrays: [Type[]], 
   callback: (value: Type) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:25](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L25)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | \[`Type`[]\] |
| `callback` | (`value`: `Type`) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
NestedEach<Type1, Type2>(
   arrays: [Type1[], Type2[]], 
   callback: (value1: Type1, value2: Type2) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:31](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L31)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | \[`Type1`[], `Type2`[]\] |
| `callback` | (`value1`: `Type1`, `value2`: `Type2`) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
NestedEach<Type1, Type2, Type3>(
   arrays: [Type1[], Type2[], Type3[]], 
   callback: (value1: Type1, value2: Type2, value3: Type3) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:37](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L37)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |
| `Type3` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | \[`Type1`[], `Type2`[], `Type3`[]\] |
| `callback` | (`value1`: `Type1`, `value2`: `Type2`, `value3`: `Type3`) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
NestedEach<Type1, Type2, Type3, Type4>(
   arrays: [Type1[], Type2[], Type3[], Type4[]], 
   callback: (value1: Type1, value2: Type2, value3: Type3, value4: Type4) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:43](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L43)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type1` |
| `Type2` |
| `Type3` |
| `Type4` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | \[`Type1`[], `Type2`[], `Type3`[], `Type4`[]\] |
| `callback` | (`value1`: `Type1`, `value2`: `Type2`, `value3`: `Type3`, `value4`: `Type4`) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
NestedEach<Type>(
   arrays: Type[][], 
   callback: (...args: Type[]) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:49](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L49)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | `Type`[][] |
| `callback` | (...`args`: `Type`[]) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
NestedEach(
   arrays: unknown[][], 
   callback: (...args: unknown[]) => void, 
   accrue?: boolean): void;
```

Defined in: [src/nestedEach.ts:55](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L55)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrays` | `unknown`[][] |
| `callback` | (...`args`: `unknown`[]) => `void` |
| `accrue?` | `boolean` |

##### Returns

`void`

***

### OverloadedFill()

Defined in: [src/fill.ts:5](https://github.com/DarrenPaulWright/object-agent/blob/main/src/fill.ts#L5)

#### Call Signature

```ts
OverloadedFill<ReturnValue>(length: number, callback: (index: number) => ReturnValue): ReturnValue[];
```

Defined in: [src/fill.ts:6](https://github.com/DarrenPaulWright/object-agent/blob/main/src/fill.ts#L6)

##### Type Parameters

| Type Parameter |
| ------ |
| `ReturnValue` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `length` | `number` |
| `callback` | (`index`: `number`) => `ReturnValue` |

##### Returns

`ReturnValue`[]

#### Call Signature

```ts
OverloadedFill(length: number): number[];
```

Defined in: [src/fill.ts:8](https://github.com/DarrenPaulWright/object-agent/blob/main/src/fill.ts#L8)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `length` | `number` |

##### Returns

`number`[]

***

### Set()

Defined in: [src/set.ts:13](https://github.com/DarrenPaulWright/object-agent/blob/main/src/set.ts#L13)

#### Call Signature

```ts
Set<Type>(
   object: unknown, 
   path: "", 
   value: Type): Type;
```

Defined in: [src/set.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/set.ts#L14)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* [`NotObject`](#notobject) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `unknown` |
| `path` | `""` |
| `value` | `Type` |

##### Returns

`Type`

#### Call Signature

```ts
Set<Type>(
   object: Type, 
   path: PathOf<Type>, 
   value: unknown): Type;
```

Defined in: [src/set.ts:20](https://github.com/DarrenPaulWright/object-agent/blob/main/src/set.ts#L20)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `path` | [`PathOf`](README.md#pathof)\<`Type`\> |
| `value` | `unknown` |

##### Returns

`Type`

#### Call Signature

```ts
Set<Type>(
   object: Type, 
   path: string, 
   value: unknown): Type;
```

Defined in: [src/set.ts:26](https://github.com/DarrenPaulWright/object-agent/blob/main/src/set.ts#L26)

##### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `path` | `string` |
| `value` | `unknown` |

##### Returns

`Type`

## Type Aliases

### ArrayDepth

```ts
type ArrayDepth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
```

Defined in: [src/types.ts:4](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L4)

***

### Depth

```ts
type Depth = [1, 2, 3, 4, 5, 6, 7, 8, 9, never];
```

Defined in: [src/types.ts:3](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L3)

***

### NotObject

```ts
type NotObject = string | number | boolean | null | undefined | symbol | bigint;
```

Defined in: [src/types.ts:1](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L1)

***

### Partial

```ts
type Partial<T> = { [P in keyof T]?: T[P] };
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1585

Make all properties in T optional

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### PathAtDepth

```ts
type PathAtDepth<Type, D> = [D] extends [never] ? never : Type extends unknown[] ? 
  | `${ArrayDepth}`
  | PathAtDepth<Type[ArrayDepth], Depth[D]> extends infer Rest ? Rest extends string | number ? `${ArrayDepth}.${Rest}` : never : never : Type extends object ? { [Key in keyof Type & (string | number)]: Key extends string | number ? `${Key}` | (PathAtDepth<(...), (...)> extends infer Rest ? (...) extends (...) ? (...) : (...) : never) : never }[keyof Type & string | number] : never;
```

Defined in: [src/types.ts:6](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L6)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Type` | - |
| `D` *extends* `number` | `0` |

***

### Pick

```ts
type Pick<T, K> = { [P in K]: T[P] };
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1606

From T, pick a set of properties whose keys are in the union K

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |

***

### UnionToIntersection

```ts
type UnionToIntersection<U> = U extends any ? (k: U) => void : never extends (k: infer I) => void ? I : never;
```

Defined in: [src/superimpose.ts:9](https://github.com/DarrenPaulWright/object-agent/blob/main/src/superimpose.ts#L9)

#### Type Parameters

| Type Parameter |
| ------ |
| `U` |
