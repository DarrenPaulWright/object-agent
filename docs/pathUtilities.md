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

### appendToPath(path, key) ⇒ <code>String</code>
> Adds a key to the end of a path


| Param | Type |
| --- | --- |
| path | <code>String</code> | 
| key | <code>String</code>, <code>Number</code> | 

**Example**  
``` javascript
import { appendToPath } from 'object-agent';

appendToPath('first.0', 'last');
// => 'first.0.last'
```

<br><a name="firstInPath"></a>

### firstInPath(path) ⇒ <code>String</code>
> Returns the first key in a path


| Param | Type |
| --- | --- |
| path | <code>String</code> | 

**Example**  
``` javascript
import { firstInPath } from 'object-agent';

firstInPath('first.0.last');
// => 'first'
```

<br><a name="initialInPath"></a>

### initialInPath(path) ⇒ <code>String</code>
> Returns the path without the last key


| Param | Type |
| --- | --- |
| path | <code>String</code> | 

**Example**  
``` javascript
import { initialInPath } from 'object-agent';

initialInPath('first.0.last');
// => 'first.0'
```

<br><a name="lastInPath"></a>

### lastInPath(path) ⇒ <code>String</code>
> Returns the last key in a path


| Param | Type |
| --- | --- |
| path | <code>String</code> | 

**Example**  
``` javascript
import { lastInPath } from 'object-agent';

lastInPath('first.0.last');
// => 'last'
```

<br><a name="tailInPath"></a>

### tailInPath(path) ⇒ <code>String</code>
> Returns the path without the first key


| Param | Type |
| --- | --- |
| path | <code>String</code> | 

**Example**  
``` javascript
import { tailInPath } from 'object-agent';

tailInPath('first.0.last');
// => '0.last'
```

<br><a name="walkPath"></a>

### walkPath(path, callback) ⇒ <code>String</code>
> Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.


| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> |  |
| callback | <code>function</code> | Provides two args, the key and the tail path after key |

**Example**  
``` javascript
import { walkPath } from 'object-agent';

walkPath('first.0.last', (key, tail) => {
    console.log(key, tail);
});
// => 'first', '0.last'
// => '0', 'last'
// => 'last', ''

walkPath('first.0.last', (key, tail) => {
    console.log(key, tail);
    if (key === '0') {
        return true;
    }
});
// => 'first', '0.last'
// => '0', 'last'
```

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
