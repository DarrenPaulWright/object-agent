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

### appendToPath(path, key, [separator]) ⇒ <code>String</code>
> Adds a key to the end of a path


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| key | <code>String</code>, <code>Number</code> |  |  |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { appendToPath } from 'object-agent';appendToPath('first.0', 'last');// => 'first.0.last'```

<br><a name="countInString"></a>

### countInString(string, match) ⇒ <code>Number</code>
> Counts the number of instances of a string within another string


| Param | Type |
| --- | --- |
| string | <code>String</code> | 
| match | <code>String</code> | 

**Example**  
``` javascriptimport { countInString } from 'object-agent';countInString('first.0', '.');// => 1```

<br><a name="firstInPath"></a>

### firstInPath(path, [separator]) ⇒ <code>String</code>
> Returns the first key in a path


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { firstInPath } from 'object-agent';firstInPath('first.0.last');// => 'first'```

<br><a name="initialInPath"></a>

### initialInPath(path, [separator]) ⇒ <code>String</code>
> Returns the path without the last key


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { initialInPath } from 'object-agent';initialInPath('first.0.last');// => 'first.0'```

<br><a name="lastInPath"></a>

### lastInPath(path, [separator]) ⇒ <code>String</code>
> Returns the last key in a path


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { lastInPath } from 'object-agent';lastInPath('first.0.last');// => 'last'```

<br><a name="tailInPath"></a>

### tailInPath(path, [separator]) ⇒ <code>String</code>
> Returns the path without the first key


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { tailInPath } from 'object-agent';tailInPath('first.0.last');// => '0.last'```

<br><a name="walkPath"></a>

### walkPath(path, callback, [separator]) ⇒ <code>String</code>
> Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  |  |
| callback | <code>function</code> |  | Provides two args, the key and the tail path after key |
| [separator] | <code>String</code> | <code>.</code> | Defines the boundary between steps in the path. |

**Example**  
``` javascriptimport { walkPath } from 'object-agent';walkPath('first.0.last', (key, tail) => {    console.log(key, tail);});// => 'first', '0.last'// => '0', 'last'// => 'last', ''walkPath('first.0.last', (key, tail) => {    console.log(key, tail);    if (key === '0') {        return true;    }});// => 'first', '0.last'// => '0', 'last'```

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
