# object-agent
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

A javascript library for working with objects

<a name="isEqual"></a>

## isEqual() ⇒ <code>Boolean</code>
Shallow compares two or more items. All items are compared with strict equality except Dates and RegExps which compare their _values_ with strict equality.

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>\*</code> \| <code>Array</code> | Can be an array of items or multiple args of items. |

**Example**  
``` javascriptimport { isEqual } from 'object-agent';isEqual(null, undefined);// => falseisEqual('a', 'a', 'a');// => trueisEqual('a', 'a', 'a', null);// => false```

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
