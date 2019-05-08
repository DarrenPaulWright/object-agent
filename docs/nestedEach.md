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


<br><a name="nestedEach"></a>

### nestedEach(arrays, callback, [accrue]) ⇒ <code>array</code>
> Iterate over the values of multiple arrays


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arrays | <code>array</code> |  |  |
| callback | <code>function</code> |  | Provides one item from each array. |
| [accrue] | <code>boolean</code> | <code>false</code> | If true then each successive array in arrays will start it's loop on the next index instead of 0. |

**Example**  
``` javascriptimport { nestedEach } from 'object-agent';const output = [];const save = (item1, item2) => output.push([item1, item2]);nestedEach([[1, 2], ['a', 'b']], save);console.log(output);// => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]```

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
