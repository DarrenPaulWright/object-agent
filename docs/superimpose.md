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


<br><a name="superimpose"></a>

### superimpose(args, [mutateFirst]) ⇒ <code>\*</code>
> Deeply superimposes two or more items on each other.> > Notes:> - Undefined values will not overwrite defined values> - Array order is maintained

**Returns**: <code>\*</code> - The resulting object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>\*</code> |  | two or more items to superimpose on each other. Each item is superimposed on the item before it. |
| [mutateFirst] | <code>Boolean</code> | <code>false</code> | If a final argument of true is provided, then the first object will be mutated in place and returned. |

**Example**  
``` javascriptimport { superimpose } from 'object-agent';const thing1 = {    a: 1,    c: {        d: 3        e: 5    },    f: [1, 2]};const thing2 = {    b: 2,    c: {        d: 4    },    f: [3]};const result = superimpose(thing1, thing2);// => {//	a: 1,//	b: 2,//	c: {//		d: 4,//		e: 5//	},//	f: [3, 2]//}console.log(result === thing1);// => false```

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
