# object-agent

A javascript library for working with objects

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

---

<a name="forOwn"></a>

## forOwn(object, callback) ⇒ <code>Boolean</code>
Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if the callback function returns a truthy value for any key; otherwise, false.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| callback | <code>function</code> | Provides two args: value and key |

**Example**  
``` javascriptimport { forOwn } from 'object-agent';const thing = {    a: 'b',    c: 'd'};forOwn(thing, (value, key) => {    console.log(value, key);});// => 'b', 'a'// => 'd', 'c'```

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
