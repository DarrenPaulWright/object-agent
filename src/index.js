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
 * - Core
 *   - [get](docs/get.md)
 *   - [set](docs/set.md)
 *   - [unset](docs/unset.md)
 * - Analyzing
 *   - [forIn](docs/forIn.md)
 *   - [forOwn](docs/forOwn.md)
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
 * - Generating
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
 *   - [path utility functions](docs/pathUtilities.md)
 */
export { default as get } from './get';
export { default as has } from './has';
export { default as set } from './set';
export { default as unset } from './unset';
export { default as forIn } from './forIn';
export { default as forOwn } from './forOwn';
export { default as mapOwn } from './mapOwn';
export { default as traverse } from './traverse';
export { default as isEmpty } from './isEmpty';
export { default as pull } from './pull';
export { default as isEqual } from './isEqual';
export { default as deepEqual } from './deepEqual';
export { default as diffUpdate } from './diffUpdate';
export { default as intersection } from './intersection';
export { default as superimpose } from './superimpose';
export { default as clone } from './clone';
export { default as combo } from './combo';
export { default as mix } from './mix';
export { default as powerset } from './powerset';
export { default as nestedEach } from './nestedEach';
export { default as repeat } from './repeat';
export { default as fill } from './fill';

export { default as walkPath } from './utility/walkPath';
export { default as appendToPath } from './utility/appendToPath';
export { default as firstInPath } from './utility/firstInPath';
export { default as initialInPath } from './utility/initialInPath';
export { default as lastInPath } from './utility/lastInPath';
export { default as tailInPath } from './utility/tailInPath';
