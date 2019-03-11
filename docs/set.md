# object-agent

A javascript library for working with objects

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

---

<a name="set"></a>

## set(object, path, value)
Sets a nested value in an object. Keys in the path that don't exist at any point in the object will be created and added to the object once.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| path | <code>Array</code> \| <code>String</code> | If a string, gets split on '.' |
| value | <code>\*</code> |  |

**Example**  
``` javascriptimport { set } from 'object-agent';const thing = {    a: [{        b: 'c'    }, {        b: 'd'    }]};set(thing, ['a', '1', 'b'], 'e');console.log(thing);// => {//    a: [{//        b: 'c'//    }, {//        b: 'e'//    }]//}```

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
