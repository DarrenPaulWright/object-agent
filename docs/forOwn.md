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


<br><a name="forOwn"></a>

## forOwn(object, callback) ⇒ <code>Boolean</code>
> Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.

**Returns**: <code>Boolean</code> - true if the callback function returns a truthy value for any key; otherwise, false.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| callback | <code>function</code> | Provides two args: value and key |

**Example**  
``` javascriptimport { forOwn } from 'object-agent';const thing = {    a: 'b',    c: 'd'};forOwn(thing, (value, key) => {    console.log(value, key);});// => 'b', 'a'// => 'd', 'c'```

[npm]: https://img.shields.io/npm/v/object-agent.svg
[npm-url]: https://npmjs.com/package/object-agent
[build]: https://travis-ci.org/DarrenPaulWright/object-agent.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/object-agent
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/object-agent?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/object-agent.svg
[deps-url]: https://david-dm.org/darrenpaulwright/object-agent
[size]: https://packagephobia.now.sh/badge?p&#x3D;object-agent
[size-url]: https://packagephobia.now.sh/result?p&#x3D;object-agent
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/object-agent.svg
[license-url]: https://npmjs.com/package/object-agent/LICENSE.md
