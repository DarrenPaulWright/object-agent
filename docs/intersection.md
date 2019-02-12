# object-agent
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

A javascript library for working with objects

<a name="intersection"></a>

## intersection() ⇒ <code>Object</code>
Performs a deep comparison of objects and returns a new object of values that are equal in all given objects.

**Kind**: global function  

| Type |
| --- |
| <code>\*</code> \| <code>Array</code> | 

**Example**  
``` javascriptimport { intersection } from 'object-agent';intersection([1, 2, 3], [2, 3, 4], [5, 6, 2, 3]); // => [2, 3]intersection({    a: 'b',    c: [1, 2, 3],    d: null}, {    a: 'b',    c: [1, 3, 4]})// => { a: 'b', c: [1, 3] }```

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
