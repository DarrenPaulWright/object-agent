**object-agent**

***

# Object Agent

> A javascript library for working with objects

<br><a name="Installation"></a>

## Installation
```
npm install object-agent
```
_Requires Babel 7.2+_

<br>

- [Documentation](https://github.com/DarrenPaulWright/object-agent/blob/main/docs/README.md)

## Modules

| Module | Description |
| ------ | ------ |
| [\<internal\>](-internal-.md) | - |

## Type Aliases

### KeysOfValue

```ts
type KeysOfValue<Type, TCondition> = keyof Type & { [Key in keyof Type]: Type[Key] extends TCondition ? Key : never }[keyof Type];
```

Defined in: [src/types.ts:54](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L54)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |
| `TCondition` |

***

### OptionalKeys

```ts
type OptionalKeys<Type> = { [Key in keyof Type]-?: undefined extends Type[Key] ? Key : never }[keyof Type];
```

Defined in: [src/types.ts:50](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L50)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

***

### PathOf

```ts
type PathOf<Type> = "" | PathAtDepth<Type>;
```

Defined in: [src/types.ts:26](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L26)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

***

### RequiredKeys

```ts
type RequiredKeys<Type> = { [Key in keyof Type]-?: object extends Pick<Type, Key> ? never : Key }[keyof Type];
```

Defined in: [src/types.ts:46](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L46)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

***

### TypeAtPath

```ts
type TypeAtPath<Type, Path> = Path extends "" ? Type : Path extends `${infer Head}.${infer Tail}` ? Head extends keyof Type ? TypeAtPath<Type[Head], Tail> : Head extends `${number}` ? number extends keyof Type ? TypeAtPath<Type[number], Tail> : never : never : Path extends keyof Type ? Type[Path] : Path extends `${number}` ? number extends keyof Type ? Type[number] : never : never;
```

Defined in: [src/types.ts:28](https://github.com/DarrenPaulWright/object-agent/blob/main/src/types.ts#L28)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |
| `Path` *extends* `string` |

## Variables

### appendToPath()

```ts
appendToPath: <Type>(path: string, key: string | number | symbol, separator: string) => PathOf<Type>;
```

Defined in: [src/utility/appendToPath.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/appendToPath.ts#L14)

Adds a key to the end of a path.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `key` | `string` \| `number` \| `symbol` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

[`PathOf`](#pathof)\<`Type`\>

#### Example

``` javascript
import { appendToPath } from 'object-agent';

appendToPath('first.0', 'last');
// => 'first.0.last'
```

***

### combo()

```ts
combo: <Type>(array: Type[], length: number) => Type[][];
```

Defined in: [src/combo.ts:18](https://github.com/DarrenPaulWright/object-agent/blob/main/src/combo.ts#L18)

Takes an array of values and returns a new array of the unique sets of the values of a given length.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `array` | `Type`[] | `undefined` |
| `length` | `number` | `2` |

#### Returns

`Type`[][]

#### Example

``` javascript
import { combo } from 'object-agent';

combo([1, 2, 3]);
// => [[1, 2], [1, 3], [2, 3]]

combo([1, 2, 3, 4], 3);
// => [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
```

***

### countInString()

```ts
countInString: (string: string, match: string) => number;
```

Defined in: [src/utility/countInString.ts:12](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/countInString.ts#L12)

Counts the number of instances of a string within another string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `string` | `string` |
| `match` | `string` |

#### Returns

`number`

#### Example

``` javascript
import { countInString } from 'object-agent';

countInString('first.0', '.');
// => 1
```

***

### deepEqual()

```ts
deepEqual: (item1: unknown, item2: unknown) => boolean;
```

Defined in: [src/deepEqual.ts:26](https://github.com/DarrenPaulWright/object-agent/blob/main/src/deepEqual.ts#L26)

Deeply compares two items.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item1` | `unknown` |
| `item2` | `unknown` |

#### Returns

`boolean`

#### Example

``` javascript
import { deepEqual } from 'object-agent';

deepEqual(null, undefined);
// => false

const item1 = {
    a: ['b']
}
const item2 = {
    a: ['c']
}

deepEqual(item1, item2);
// => false
```

***

### diffUpdate()

```ts
diffUpdate: <Type>(object1?: Type, object2?: Type) => Partial<Type>;
```

Defined in: [src/diffUpdate.ts:27](https://github.com/DarrenPaulWright/object-agent/blob/main/src/diffUpdate.ts#L27)

Performs a deep comparison of two objects, returns a new object with only the first level values that have been changed or added on the second object.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object1?` | `Type` |
| `object2?` | `Type` |

#### Returns

[`Partial`](-internal-.md#partial)\<`Type`\>

#### Example

``` javascript
import { diffUpdate } from 'object-agent';

const item1 = {
    a: ['b'],
    c: 'd',
    e: null
}
const item2 = {
    a: ['b'],
    c: null,
    e: null,
    f: 'g'
}

diffUpdate(item1, item2);
// => { c: null, f: 'g' }
```

***

### erase()

```ts
erase: (object: object, key: string) => unknown;
```

Defined in: [src/erase.ts:19](https://github.com/DarrenPaulWright/object-agent/blob/main/src/erase.ts#L19)

Deletes a property from an object, if the property exists.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `object` |
| `key` | `string` |

#### Returns

`unknown`

#### Example

``` javascript
import { erase } from 'object-agent';

const foo = {
    bar: 1,
    also: 2
};

erase(foo, 'bar');

console.log(foo);
// => {also: 2}
```

***

### fill

```ts
const fill: OverloadedFill;
```

Defined in: [src/fill.ts:25](https://github.com/DarrenPaulWright/object-agent/blob/main/src/fill.ts#L25)

Returns an array of specified length filled with either the index value or the value returned from the provided callback.

#### Example

``` javascript
import { fill } from 'object-agent';

fill(5);
// => [0, 1, 2, 3, 4]

fill(3, (index) => index * 3);
// => [0, 3, 6]
```

***

### firstInPath()

```ts
firstInPath: <Type>(path: string, separator: string) => PathOf<Type>;
```

Defined in: [src/utility/firstInPath.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/firstInPath.ts#L14)

Returns the first key in a path.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

[`PathOf`](#pathof)\<`Type`\>

#### Example

``` javascript
import { firstInPath } from 'object-agent';

firstInPath('first.0.last');
// => 'first'
```

***

### get

```ts
const get: Get;
```

Defined in: [src/get.ts:38](https://github.com/DarrenPaulWright/object-agent/blob/main/src/get.ts#L38)

Gets a nested value from an object.

#### Example

``` javascript
import { get } from 'object-agent';

const thing = {
    a: [{
        b: 'c'
    }, {
        b: 'd'
    }]
};

get(thing, 'a.1.b');
// => 'd'
```

***

### initialInPath()

```ts
initialInPath: <Type>(path: string, separator: string) => PathOf<Type>;
```

Defined in: [src/utility/initialInPath.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/initialInPath.ts#L14)

Returns the path without the last key.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

[`PathOf`](#pathof)\<`Type`\>

#### Example

``` javascript
import { initialInPath } from 'object-agent';

initialInPath('first.0.last');
// => 'first.0'
```

***

### intersection()

```ts
intersection: <Type>(...args: Type[]) => Partial<Type>;
```

Defined in: [src/intersection.ts:85](https://github.com/DarrenPaulWright/object-agent/blob/main/src/intersection.ts#L85)

Performs a deep comparison of objects and returns a new object of values that are equal in all given objects.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Type`[] |

#### Returns

[`Partial`](-internal-.md#partial)\<`Type`\>

#### Example

``` javascript
import { intersection } from 'object-agent';

intersection([1, 2, 3], [2, 3, 4], [5, 6, 2, 3]); // => [2, 3]

intersection({
    a: 'b',
    c: [1, 2, 3],
    d: null
}, {
    a: 'b',
    c: [1, 3, 4]
})
// => { a: 'b', c: [1, 3] }
```

***

### isEmpty()

```ts
isEmpty: (item: unknown) => boolean;
```

Defined in: [src/isEmpty.ts:29](https://github.com/DarrenPaulWright/object-agent/blob/main/src/isEmpty.ts#L29)

Tests if an object or array has any set keys. The values of each key are not considered.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `unknown` |

#### Returns

`boolean`

#### Example

``` javascript
import { isEmpty } from 'object-agent';

isEmpty(['a', 1, 'b']);
// => false

isEmpty([]);
// => true

isEmpty({ a: 'b' });
// => false

isEmpty({});
// => true

isEmpty(null);
// => true

isEmpty(undefined);
// => true
```

***

### isEqual()

```ts
isEqual: (...args: unknown[]) => boolean;
```

Defined in: [src/isEqual.ts:63](https://github.com/DarrenPaulWright/object-agent/blob/main/src/isEqual.ts#L63)

Shallow compares two or more items. All items are compared with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality except Dates and RegExps which compare their _values_ with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality, Objects and Arrays which compare key lengths, and instances of objects that compare all properties and prototype objects.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

#### Returns

`boolean`

#### Example

``` javascript
import { isEqual } from 'object-agent';

isEqual(null, undefined);
// => false

isEqual('a', 'a', 'a');
// => true

isEqual('a', 'a', 'a', null);
// => false
```

***

### lastInPath()

```ts
lastInPath: (path: string, separator: string) => string;
```

Defined in: [src/utility/lastInPath.ts:12](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/lastInPath.ts#L12)

Returns the last key in a path.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

`string`

#### Example

``` javascript
import { lastInPath } from 'object-agent';

lastInPath('first.0.last');
// => 'last'
```

***

### mix

```ts
const mix: Mix;
```

Defined in: [src/mix.ts:40](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mix.ts#L40)

Mix the contents of multiple arrays into a nested array where all variations of one item from each array is in each of the nested arrays.

#### Example

``` javascript
import { mix } from 'object-agent';

mix([1, 2, 3], ['a', 'b', 'c']);
// => [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]

mix([1, 2],  ['a', 'b'],  ['x', 'y']);
// => [[1, 'a', 'x'], [1, 'a', 'y'], [1, 'b', 'x'], [1, 'b', 'y'], [2, 'a', 'x'], [2, 'a', 'y'], [2, 'b', 'x'], [2, 'b', 'y']]
```

***

### nestedEach

```ts
const nestedEach: NestedEach;
```

Defined in: [src/nestedEach.ts:78](https://github.com/DarrenPaulWright/object-agent/blob/main/src/nestedEach.ts#L78)

Iterate over the values of multiple arrays.

#### Example

``` javascript
import { nestedEach } from 'object-agent';

const output = [];
const save = (item1, item2) => output.push([item1, item2]);

nestedEach([[1, 2], ['a', 'b']], save);

console.log(output);
// => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

***

### powerset()

```ts
powerset: <Type>(values: Type[]) => Type[][];
```

Defined in: [src/powerset.ts:14](https://github.com/DarrenPaulWright/object-agent/blob/main/src/powerset.ts#L14)

Create a [power set](https://en.wikipedia.org/wiki/Power_set) from a set of values.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `Type`[] |

#### Returns

`Type`[][]

#### Example

``` javascript
import { powerset } from 'object-agent';

powerset([1, 2, 3]);
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

***

### pull()

```ts
pull: <Type, Path>(array: Type[], path: Path) => (TypeAtPath<Type, Path> | undefined)[];
```

Defined in: [src/pull.ts:20](https://github.com/DarrenPaulWright/object-agent/blob/main/src/pull.ts#L20)

Pulls values from an array of objects into a new array.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Type` *extends* `object` | - |
| `Path` *extends* `""` \| `"0"` \| `"1"` \| `"2"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` | [`PathOf`](#pathof)\<`Type`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | `Type`[] |
| `path` | `Path` |

#### Returns

([`TypeAtPath`](#typeatpath)\<`Type`, `Path`\> \| `undefined`)[]

#### Example

``` javascript
import { pull } from 'object-agent';

const array = [{
    a: { b: [1, 2, 3] }
}, {
    a: { b: [4, 5, 6] }
}];

pull(array, 'a.b.1'); // => [2, 5]
```

***

### repeat()

```ts
repeat: (times: number, callback: (index: number) => void) => void;
```

Defined in: [src/repeat.ts:16](https://github.com/DarrenPaulWright/object-agent/blob/main/src/repeat.ts#L16)

Calls a callback a specified number of times.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `times` | `number` |
| `callback` | (`index`: `number`) => `void` |

#### Returns

`void`

#### Example

``` javascript
import { repeat } from 'object-agent';

repeat(5, (index) => console.log(index));
// => 0
// => 1
// => 2
// => 3
// => 4
```

***

### set

```ts
const set: Set;
```

Defined in: [src/set.ts:59](https://github.com/DarrenPaulWright/object-agent/blob/main/src/set.ts#L59)

Sets a nested value in an object. Keys in the path that don't exist at any point in the object will be created and added to the object once.

#### Example

``` javascript
import { set } from 'object-agent';

const thing = {
    a: [{
        b: 'c'
    }, {
        b: 'd'
    }]
};

set(thing, 'a.1.b', 'e');
console.log(thing);
// => {
//    a: [{
//        b: 'c'
//    }, {
//        b: 'e'
//    }]
//}
```

***

### superimpose()

```ts
superimpose: <Type>(...args: Type) => UnionToIntersection<Type>;
```

Defined in: [src/superimpose.ts:55](https://github.com/DarrenPaulWright/object-agent/blob/main/src/superimpose.ts#L55)

Deeply superimposes two or more items on each other.

Notes:
- Undefined values will not overwrite defined values
- Array order is maintained
- if the final parameter is true then the first parameter will be mutated and returned

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `unknown`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Type` |

#### Returns

[`UnionToIntersection`](-internal-.md#uniontointersection)\<`Type`\>

#### Example

``` javascript
import { superimpose } from 'object-agent';

const thing1 = {
    a: 1,
    c: {
        d: 3
        e: 5
    },
    f: [1, 2]
};

const thing2 = {
    b: 2,
    c: {
        d: 4
    },
    f: [3]
};

const result = superimpose(thing1, thing2);
// => {
//	a: 1,
//	b: 2,
//	c: {
//		d: 4,
//		e: 5
//	},
//	f: [3, 2]
//}

console.log(result === thing1);
// => false
```

***

### tailInPath()

```ts
tailInPath: (path: string, separator: string) => string;
```

Defined in: [src/utility/tailInPath.ts:12](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/tailInPath.ts#L12)

Returns the path without the first key.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

`string`

#### Example

``` javascript
import { tailInPath } from 'object-agent';

tailInPath('first.0.last');
// => '0.last'
```

***

### unset()

```ts
unset: (object: object, path: string) => unknown;
```

Defined in: [src/unset.ts:26](https://github.com/DarrenPaulWright/object-agent/blob/main/src/unset.ts#L26)

Deletes a property from a nested object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `object` |
| `path` | `string` |

#### Returns

`unknown`

#### Example

``` javascript
import { unset } from 'object-agent';

const thing = {
    a: [{
        b: 'c'
    }, {
        b: 'd'
    }]
};

unset(thing, ['a.1.b']);
console.log(thing);
// => {
//    a: [{ b: 'c' }, {}]
//}
```

***

### walkPath()

```ts
walkPath: (path: string, callback: (key: string, tail: string) => unknown, separator: string) => void;
```

Defined in: [src/utility/walkPath.ts:25](https://github.com/DarrenPaulWright/object-agent/blob/main/src/utility/walkPath.ts#L25)

Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `path` | `string` | `undefined` |
| `callback` | (`key`: `string`, `tail`: `string`) => `unknown` | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

`void`

#### Example

``` javascript
import { walkPath } from 'object-agent';

walkPath('first.0.last', (key, tail) => {
    console.log(key, tail);
});
// => 'first', '0.last'
// => '0', 'last'
// => 'last', ''

walkPath('first.0.last', (key, tail) => {
    console.log(key, tail);
    if (key === '0') {
        return true;
    }
});
// => 'first', '0.last'
// => '0', 'last'
```

## Functions

### clone()

```ts
function clone<Type>(value: Type, settings: ICloneSettings): Type;
```

Defined in: [src/clone.ts:81](https://github.com/DarrenPaulWright/object-agent/blob/main/src/clone.ts#L81)

Deep clone a value.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Type` |
| `settings` | [`ICloneSettings`](-internal-.md#iclonesettings) |

#### Returns

`Type`

#### Example

``` javascript
import { clone } from 'object-agent';

clone({ a: 'b', c: 'd' });
// => { a: 'b', c: 'd' }
```

***

### forIn()

```ts
function forIn<Type>(object: Type, callback: (value: Type[keyof Type], key: keyof Type) => unknown): boolean;
```

Defined in: [src/forIn.ts:21](https://github.com/DarrenPaulWright/object-agent/blob/main/src/forIn.ts#L21)

Iterates over own and inherited properties of an object. Stops iterating as soon as the callback returns a truthy value.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `callback` | (`value`: `Type`\[keyof `Type`\], `key`: keyof `Type`) => `unknown` |

#### Returns

`boolean`

#### Example

``` javascript
import { forIn } from 'object-agent';

const Thing = {
    this.a = 'b';
};

Thing.prototype.c = 'd';

forIn(new Thing(), (value, key) => {
    console.log(value, key);
});
// => 'b', 'a'
// => 'd', 'c'
```

***

### forOwn()

```ts
function forOwn<Type>(object: Type | null | undefined, callback: <Key>(value: Type[Key], key: Key) => unknown): boolean;
```

Defined in: [src/forOwn.ts:20](https://github.com/DarrenPaulWright/object-agent/blob/main/src/forOwn.ts#L20)

Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` \| `null` \| `undefined` |
| `callback` | \<`Key`\>(`value`: `Type`\[`Key`\], `key`: `Key`) => `unknown` |

#### Returns

`boolean`

#### Example

``` javascript
import { forOwn } from 'object-agent';

const thing = {
    a: 'b',
    c: 'd'
};

forOwn(thing, (value, key) => {
    console.log(value, key);
});
// => 'b', 'a'
// => 'd', 'c'
```

***

### forOwnReduce()

```ts
function forOwnReduce<ReturnType, Type>(
   object: Type, 
   callback: (accumulator: ReturnType, value: Type[keyof Type], key: keyof Type) => void | ReturnType, 
   initialValue: ReturnType): ReturnType;
```

Defined in: [src/forOwnReduce.ts:24](https://github.com/DarrenPaulWright/object-agent/blob/main/src/forOwnReduce.ts#L24)

Iterates over own properties of an object and returns a reduced value.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `ReturnType` | - |
| `Type` *extends* `object` | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Type` |
| `callback` | (`accumulator`: `ReturnType`, `value`: `Type`\[keyof `Type`\], `key`: keyof `Type`) => `void` \| `ReturnType` |
| `initialValue` | `ReturnType` |

#### Returns

`ReturnType`

#### Example

``` javascript
import { forOwnReduce } from 'object-agent';

const thing = {
    a: 'b',
    c: 'd'
};

const output = forOwnReduce(thing, (result, value, key) => {
    result.push([value, key]);
    return result;
}, []);

console.log(output);
// => [['b', 'a'], ['d', 'c']]
```

***

### has()

```ts
function has(object: object, path: string): boolean;
```

Defined in: [src/has.ts:22](https://github.com/DarrenPaulWright/object-agent/blob/main/src/has.ts#L22)

Determines if a nested value is defined.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `object` |
| `path` | `string` |

#### Returns

`boolean`

#### Example

``` javascript
import { has } from 'object-agent';

const thing = {
    a: [{
        b: 'c'
    }, {
        b: 'd'
    }]
};

has(thing, 'a.1.b');
// => true
```

***

### mapOwn()

```ts
function mapOwn<Input>(
   object: Input, 
   callback?: (value: unknown, key: keyof Input) => unknown, 
   ignoreKeys?: keyof Input[]): { [Property in never]: unknown };
```

Defined in: [src/mapOwn.ts:20](https://github.com/DarrenPaulWright/object-agent/blob/main/src/mapOwn.ts#L20)

Builds a new object by iterating over own properties of an object.

#### Type Parameters

| Type Parameter |
| ------ |
| `Input` *extends* `object` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `object` | `Input` | `undefined` |
| `callback?` | (`value`: `unknown`, `key`: keyof `Input`) => `unknown` | `undefined` |
| `ignoreKeys?` | keyof `Input`[] | `[]` |

#### Returns

`{ [Property in never]: unknown }`

#### Example

``` javascript
import { mapOwn } from 'object-agent';

const thing = {
    a: 'b',
    c: 'd'
};

mapOwn(thing, (value, key) => value + ' ' + key);
// => { a: 'b a', c: 'd c' }
```

***

### traverse()

```ts
function traverse<Type>(
   object: Type, 
   callback: <Path>(path: Path, value: TypeAtPath<Type, Path>, isCircular: boolean) => unknown, 
   isOptimistic: boolean): boolean;
```

Defined in: [src/traverse.ts:81](https://github.com/DarrenPaulWright/object-agent/blob/main/src/traverse.ts#L81)

Traverses a nested object. Circular objects are only traversed once.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `object` | `Type` | `undefined` |
| `callback` | \<`Path`\>(`path`: `Path`, `value`: [`TypeAtPath`](#typeatpath)\<`Type`, `Path`\>, `isCircular`: `boolean`) => `unknown` | `undefined` |
| `isOptimistic` | `boolean` | `false` |

#### Returns

`boolean`

#### Example

``` javascript
import { traverse } from 'object-agent';

const thing = {
    a: [{
        b: 'c'
    }, {
        b: 'd'
    }],
    e: 'f
};

traverse(thing, (path, value) => {
    console.log(path, value);
});
// => '', { a: [{ b: 'c' }, { b: 'd' }] }
// => 'a', [{ b: 'c' }, { b: 'd' }]
// => 'a.0', { b: 'c' }
// => 'a.0.b', 'c'
// => 'a.1', { b: 'd' }
// => 'a.1.b', 'd'
// => 'e', 'f'
```
