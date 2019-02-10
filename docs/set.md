# object-agent
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

A javascript library for working with objects

<a name="set"></a>

## set(path, object, value) ⇒ <code>\*</code>
Sets a nested value in an object.

**Kind**: global function  

| Param | Type |
| --- | --- |
| path | <code>Array</code> | 
| object | <code>Object</code> | 
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { set } from 'object-agent';const thing = {    a: [{        b: 'c'    }, {        b: 'd'    }]};set(['a', '1', 'b'], thing, 'e');console.log(thing);// => {//    a: [{//        b: 'c'//    }, {//        b: 'e'//    }]//}```

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
