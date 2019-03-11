# object-agent

A javascript library for working with objects

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

---

<a name="has"></a>

## has(object, path) ⇒ <code>\*</code>
Determines if a nested value is defined

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| path | <code>Array</code> \| <code>String</code> | If a string, gets split on '.' |

**Example**  
``` javascriptimport { has } from 'object-agent';const thing = {    a: [{        b: 'c'    }, {        b: 'd'    }]};has(['a', 1, 'b'], thing);// => true```

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
