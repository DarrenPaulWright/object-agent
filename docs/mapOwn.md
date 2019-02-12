# object-agent
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

A javascript library for working with objects

<a name="mapOwn"></a>

## mapOwn(object, callback) ⇒ <code>Object</code> \| <code>\*</code>
Builds a new object by iterating over own properties of an object.

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>\*</code> - If null or undefined are passed in then the same is returned, otherwise a new object  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 
| callback | <code>function</code> | 

**Example**  
``` javascriptimport { mapOwn } from 'object-agent';const thing = {    a: 'b',    c: 'd'};mapOwn(thing, (value, key) => value + ' ' + key);// => { a: 'b a', c: 'd c' }```

## License

[MIT](LICENSE.md)

[npm]: https://img.shields.io/npm/v/object-agent.svg
[npm-url]: https://npmjs.com/package/object-agent
[build]: https://travis-ci.org/DarrenPaulWright/object-agent.svg?branch=master
[build-url]: https://travis-ci.org/DarrenPaulWright/object-agent
[deps]: https://david-dm.org/darrenpaulwright/object-agent.svg
[deps-url]: https://david-dm.org/darrenpaulwright/object-agent
[size]: https://packagephobia.now.sh/badge?p=object-agent
[size-url]: https://packagephobia.now.sh/result?p=object-agent
