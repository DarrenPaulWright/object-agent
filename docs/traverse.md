# object-agent

A javascript library for working with objects

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/object-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile=package.json)

---

<a name="traverse"></a>

## traverse(object, callback, [isOptimistic]) ⇒ <code>Boolean</code>
Traverses a nested object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if the callback function returns a truthy value for any path; otherwise, false.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  |  |
| callback | <code>function</code> |  | Provides two args, path and value. If true is returned then stop traversing and return true. |
| [isOptimistic] | <code>Boolean</code> | <code>false</code> | If true then returning true in the callback will prevent going deeper down that branch, but will otherwise continue traversing. |

**Example**  
``` javascriptimport { traverse } from 'object-agent';const thing = {    a: [{        b: 'c'    }, {        b: 'd'    }],    e: 'f};traverse(thing, (path, value) => {    console.log(path, value);});// => [], { a: [{ b: 'c' }, { b: 'd' }] }// => ['a'], [{ b: 'c' }, { b: 'd' }]// => ['a', 0], { b: 'c' }// => ['a', 0, 'b'], 'c'// => ['a', 1], { b: 'd' }// => ['a', 1, 'b'], 'd'// => ['e'], 'f'```

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
