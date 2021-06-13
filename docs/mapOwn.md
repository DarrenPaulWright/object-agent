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


<br><a name="mapOwn"></a>

## mapOwn(object, callback, [ignoreKeys]) ⇒ <code>object</code> \| <code>\*</code>
> Builds a new object by iterating over own properties of an object.

**Returns**: <code>object</code> \| <code>\*</code> - If null or undefined are passed in then the same is returned, otherwise a new object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to map. |
| callback | <code>function</code> | Provides two args: value and key. |
| [ignoreKeys] | <code>Array</code>, <code>string</code> | Any keys that should be ignored. |

**Example**  
``` javascript
import { mapOwn } from 'object-agent';

const thing = {
    a: 'b',
    c: 'd'
};

mapOwn(thing, (value, key) => value + ' ' + key);
// => { a: 'b a', c: 'd c' }
```

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
