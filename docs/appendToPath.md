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


<br><a name="appendToPath"></a>

## appendToPath(path, key, [separator]) ⇒ <code>string</code>
> Adds a key to the end of a path.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  | The path. |
| key | <code>string</code>, <code>number</code> |  | The next key to append. |
| [separator] | <code>string</code> | <code>&quot;.&quot;</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascript
import { appendToPath } from 'object-agent';

appendToPath('first.0', 'last');
// => 'first.0.last'
```

[npm]: https://img.shields.io/npm/v/object-agent.svg
[npm-url]: https://npmjs.com/package/object-agent
[build]: https://travis-ci.org/DarrenPaulWright/object-agent.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/object-agent
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/object-agent/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/object-agent?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/object-agent.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/object-agent
[size]: https://packagephobia.now.sh/badge?p&#x3D;object-agent
[size-url]: https://packagephobia.now.sh/result?p&#x3D;object-agent
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/object-agent/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/object-agent?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/object-agent.svg
[license-url]: https://npmjs.com/package/object-agent/LICENSE.md
