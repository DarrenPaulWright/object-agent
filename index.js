/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install object-agent
 * ```
 * _Requires Babel 7.2+_
 */

/**
 * @name Docs
 * @summary
 * - Path
 *   - [get](docs/get.md)
 *   - [set](docs/set.md)
 *   - [unset](docs/unset.md)
 *   - [path utility functions](docs/pathUtilities.md)
 * - Analysis
 *   - [forIn](docs/forIn.md)
 *   - [forOwn](docs/forOwn.md)
 *   - [forOwnReduce](docs/forOwnReduce.md)
 *   - [mapOwn](docs/mapOwn.md)
 *   - [traverse](docs/traverse.md)
 *   - Comparison
 *     - [diffUpdate](docs/diffUpdate.md)
 *     - [intersection](docs/intersection.md)
 *   - Testing
 *     - [has](docs/has.md)
 *     - [isEmpty](docs/isEmpty.md)
 *     - [isEqual](docs/isEqual.md)
 *     - [deepEqual](docs/deepEqual.md)
 * - Data Generation
 *   - [nestedEach](docs/nestedEach.md)
 *   - [combo](docs/combo.md)
 *   - [mix](docs/mix.md)
 *   - [powerset](docs/powerset.md)
 * - Other
 *   - [superimpose](docs/superimpose.md)
 *   - [clone](docs/clone.md)
 *   - [pull](docs/pull.md)
 *   - [repeat](docs/repeat.md)
 *   - [fill](docs/fill.md)
 */
export { default as get } from './src/get';
export { default as has } from './src/has';
export { default as set } from './src/set';
export { default as unset } from './src/unset';
export { default as forIn } from './src/forIn';
export { default as forOwn } from './src/forOwn';
export { default as forOwnReduce } from './src/forOwnReduce';
export { default as mapOwn } from './src/mapOwn';
export { default as traverse } from './src/traverse';
export { default as isEmpty } from './src/isEmpty';
export { default as pull } from './src/pull';
export { default as isEqual } from './src/isEqual';
export { default as deepEqual } from './src/deepEqual';
export { default as diffUpdate } from './src/diffUpdate';
export { default as intersection } from './src/intersection';
export { default as superimpose } from './src/superimpose';
export { default as clone } from './src/clone';
export { default as combo } from './src/combo';
export { default as mix } from './src/mix';
export { default as powerset } from './src/powerset';
export { default as nestedEach } from './src/nestedEach';
export { default as repeat } from './src/repeat';
export { default as fill } from './src/fill';

export { default as walkPath } from './src/utility/walkPath';
export { default as appendToPath } from './src/utility/appendToPath';
export { default as firstInPath } from './src/utility/firstInPath';
export { default as initialInPath } from './src/utility/initialInPath';
export { default as lastInPath } from './src/utility/lastInPath';
export { default as tailInPath } from './src/utility/tailInPath';
export { default as countInString } from './src/utility/countInString';
