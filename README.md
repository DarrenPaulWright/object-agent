# Object Agent

> A javascript library for working with objects
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]

<br><a name="Installation"></a>

## Installation
```
npm install object-agent
```
_Requires Babel 7.2+_


<br>

## Functions

<dl>

#### Comparison Functions

<dt><a href="docs/deepEqual.md">deepEqual(item1, item2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Deeply compares two items.</p>
</dd>
<dt><a href="docs/diffUpdate.md">diffUpdate(object1, object2)</a> ⇒ <code>object</code></dt>
<dd><p>Performs a deep comparison of two objects, returns a new object with only the first level values that have been changed or added on the second object.</p>
</dd>
<dt><a href="docs/isEmpty.md">isEmpty(item)</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if an object or array has any set keys. The values of each key are not considered.</p>
</dd>
<dt><a href="docs/isEqual.md">isEqual(args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Shallow compares two or more items. All items are compared with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality">SameValue</a> equality except Dates and RegExps which compare their <em>values</em> with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality">SameValue</a> equality, Objects and Arrays which compare key lengths, and instances of objects that compare all properties and prototype objects.</p>
</dd>

#### Data Generation Functions

<dt><a href="docs/combo.md">combo(array, [length])</a> ⇒ <code>Array</code></dt>
<dd><p>Takes an array of values and returns a new array of the unique sets of the values of a given length.</p>
</dd>
<dt><a href="docs/mix.md">mix(...args)</a> ⇒ <code>Array</code></dt>
<dd><p>Mix the contents of multiple arrays into a nested array where all variations of one item from each array is in each of the nested arrays.</p>
</dd>
<dt><a href="docs/powerset.md">powerset(values)</a> ⇒ <code>Array</code></dt>
<dd><p>Create a <a href="https://en.wikipedia.org/wiki/Power_set">power set</a> from a set of values.</p>
</dd>

#### Interaction Functions

<dt><a href="docs/clone.md">clone(value, [settings])</a> ⇒ <code>*</code></dt>
<dd><p>Deep clone a value.</p>
</dd>
<dt><a href="docs/erase.md">erase(object, key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Deletes a property from an object, if the property exists.</p>
</dd>
<dt><a href="docs/get.md">get(object, path)</a> ⇒ <code>*</code></dt>
<dd><p>Gets a nested value from an object.</p>
</dd>
<dt><a href="docs/has.md">has(object, path)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if a nested value is defined.</p>
</dd>
<dt><a href="docs/intersection.md">intersection(args)</a> ⇒ <code>object</code></dt>
<dd><p>Performs a deep comparison of objects and returns a new object of values that are equal in all given objects.</p>
</dd>
<dt><a href="docs/set.md">set(object, path, value)</a> ⇒ <code>object</code></dt>
<dd><p>Sets a nested value in an object. Keys in the path that don&#39;t exist at any point in the object will be created and added to the object once.</p>
</dd>
<dt><a href="docs/superimpose.md">superimpose(...args, [mutateFirst])</a> ⇒ <code>*</code></dt>
<dd><p>Deeply superimposes two or more items on each other.</p>
<p>Notes:</p>
<ul>
<li>Undefined values will not overwrite defined values</li>
<li>Array order is maintained</li>
</ul>
</dd>
<dt><a href="docs/unset.md">unset(object, path)</a> ⇒ <code>object</code></dt>
<dd><p>Deletes a property from a nested object.</p>
</dd>
<dt><a href="docs/countInString.md">countInString(string, match)</a> ⇒ <code>number</code></dt>
<dd><p>Counts the number of instances of a string within another string.</p>
</dd>

#### Iteration Functions

<dt><a href="docs/fill.md">fill(length, [callback])</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of specified length filled with either the index value or the value returned from the provided callback.</p>
</dd>
<dt><a href="docs/forIn.md">forIn(object, callback)</a> ⇒ <code>boolean</code></dt>
<dd><p>Iterates over own and inherited properties of an object. Stops iterating as soon as the callback returns a truthy value.</p>
</dd>
<dt><a href="docs/forOwn.md">forOwn(object, callback)</a> ⇒ <code>boolean</code></dt>
<dd><p>Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.</p>
</dd>
<dt><a href="docs/forOwnReduce.md">forOwnReduce(object, callback, initialValue)</a> ⇒ <code>*</code></dt>
<dd><p>Iterates over own properties of an object and returns a reduced value.</p>
</dd>
<dt><a href="docs/mapOwn.md">mapOwn(object, callback, [ignoreKeys])</a> ⇒ <code>object</code> | <code>*</code></dt>
<dd><p>Builds a new object by iterating over own properties of an object.</p>
</dd>
<dt><a href="docs/nestedEach.md">nestedEach(arrays, callback, [accrue])</a></dt>
<dd><p>Iterate over the values of multiple arrays.</p>
</dd>
<dt><a href="docs/pull.md">pull(array, path)</a> ⇒ <code>Array</code></dt>
<dd><p>Pulls values from an array of objects into a new array.</p>
</dd>
<dt><a href="docs/repeat.md">repeat(times, callback)</a></dt>
<dd><p>Calls a callback a specified number of times.</p>
</dd>
<dt><a href="docs/traverse.md">traverse(object, callback, [isOptimistic])</a> ⇒ <code>boolean</code></dt>
<dd><p>Traverses a nested object. Circular objects are only traversed once.</p>
</dd>

#### Path Utility Functions

<dt><a href="docs/appendToPath.md">appendToPath(path, key, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Adds a key to the end of a path.</p>
</dd>
<dt><a href="docs/firstInPath.md">firstInPath(path, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the first key in a path.</p>
</dd>
<dt><a href="docs/initialInPath.md">initialInPath(path, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the path without the last key.</p>
</dd>
<dt><a href="docs/lastInPath.md">lastInPath(path, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the last key in a path.</p>
</dd>
<dt><a href="docs/tailInPath.md">tailInPath(path, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the path without the first key.</p>
</dd>
<dt><a href="docs/walkPath.md">walkPath(path, callback, [separator])</a></dt>
<dd><p>Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.</p>
</dd>
</dl>

[npm]: https://img.shields.io/npm/v/object-agent.svg
[npm-url]: https://npmjs.com/package/object-agent
[build]: https://travis-ci.org/DarrenPaulWright/object-agent.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/object-agent
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/object-agent?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/object-agent.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/object-agent
[size]: https://packagephobia.now.sh/badge?p&#x3D;object-agent
[size-url]: https://packagephobia.now.sh/result?p&#x3D;object-agent
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/object-agent.svg
[license-url]: https://npmjs.com/package/object-agent/LICENSE.md
