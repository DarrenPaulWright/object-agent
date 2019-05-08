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


<br><a name="intersection"></a>

### intersection() ⇒ <code>Object</code>
> Performs a deep comparison of objects and returns a new object of values that are equal in all given objects.


| Type |
| --- |
| <code>\*</code>, <code>Array</code> | 

**Example**  
``` javascript
import { intersection } from 'object-agent';

intersection([1, 2, 3], [2, 3, 4], [5, 6, 2, 3]); // => [2, 3]

intersection({
    a: 'b',
    c: [1, 2, 3],
    d: null
}, {
    a: 'b',
    c: [1, 3, 4]
})
// => { a: 'b', c: [1, 3] }
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
