# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [1.0.2] - 2019-08-28
###Security
- Updating dependencies

## [1.0.1] - 2019-07-29
###Security
- Updating dependencies

## [1.0.0] - 2019-07-08
### Changed
- Paths are now always strings.
- [set](docs/set.md) returns the mutated object.
- [clone](docs/clone.md)
  - ignoreKeys is now in a settings object
  - isCircular setting added
- [isEqual](docs/isEqual.md) now uses [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality

## [0.6.0] - 2019-07-01
### Added
- [superimpose](docs/superimpose.md)

## [0.5.3] - 2019-06-11
- Updating documentation

## [0.5.2] - 2019-06-05
###Security
- Updating dependencies

## [0.5.1] - 2019-06-05
###Security
- Updating dependencies

## [0.5.0] - 2019-06-04
### Added
- [repeat](docs/repeat.md)
- [fill](docs/fill.md)

## [0.4.0] - 2019-05-08
### Added
- [mix](docs/mix.md)
- [combo](docs/combo.md)
- [powerset](docs/powerset.md)
- [nestedEach](docs/nestedEach.md)

### Changed
- Fixed [forIn](docs/forIn.md) to not call the callback on the constructor.

## [0.3.2] - 2019-3-11
### Changed
- Fixing typos in docs

## [0.3.1] - 2019-3-11
### Changed
- Fixing issue with git and npm

## [0.3.0] - 2019-3-11
### Added
- [has](docs/has.md)
- [forIn](docs/forIn.md)

### Changed
- [isEqual](docs/isEqual.md) Objects and Arrays only compare key lengths.

## [0.2.7] - 2019-3-1
### Changed
- [set](docs/set.md) only adds new items once at the end instead of progressively

## [0.2.6] - 2019-2-17
### Changed
- Added ignoreKeys arg to [mapOwn](docs/mapOwn.md) and [clone](docs/clone.md)

## [0.2.5] - 2019-2-17
### Changed
- Added isOptimistic option to [traverse](docs/traverse.md)

## [0.2.4] - 2019-2-15
### Changed
- Fixed some dependency issues

## [0.2.3] - 2019-2-15
### Changed
- [deepEqual](docs/deepEqual.md) simplified code to take advantage of changes to traverse.

## [0.2.2] - 2019-2-15
### Changed
- [traverse](docs/traverse.md) should call the callback with an empty path

## [0.2.1] - 2019-2-14
### Changed
- [forOwn](docs/forOwn.md) shouldn't call a callback on keys that are deleted in a previous callback 

## [0.2.0] - 2019-2-12
### Added
- [mapOwn](docs/mapOwn.md)
- [clone](docs/clone.md)

## 0.1.0 - 2019-2-12
### Added
- [get](docs/get.md)
- [set](docs/set.md)
- [unset](docs/unset.md)
- [forOwn](docs/forOwn.md)
- [traverse](docs/traverse.md)
- [isEmpty](docs/isEmpty.md)
- [pull](docs/pull.md)
- [isEqual](docs/isEqual.md)
- [deepEqual](docs/deepEqual.md)
- [diffUpdate](docs/diffUpdate.md)
- [intersection](docs/intersection.md)

[1.0.2]: https://github.com/DarrenPaulWright/object-agent/compare/v1.0.1...1.0.2
[1.0.1]: https://github.com/DarrenPaulWright/object-agent/compare/v1.0.0...1.0.1
[1.0.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.6.0...1.0.0
[0.6.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.5.3...0.6.0
[0.5.3]: https://github.com/DarrenPaulWright/object-agent/compare/v0.5.2...0.5.3
[0.5.2]: https://github.com/DarrenPaulWright/object-agent/compare/v0.5.1...0.5.2
[0.5.1]: https://github.com/DarrenPaulWright/object-agent/compare/v0.5.0...0.5.1
[0.5.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.4.0...0.5.0
[0.4.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.3.2...0.4.0
[0.3.2]: https://github.com/DarrenPaulWright/object-agent/compare/v0.3.1...0.3.2
[0.3.1]: https://github.com/DarrenPaulWright/object-agent/compare/v0.3.0...0.3.1
[0.3.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.7...0.3.0
[0.2.7]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.6...0.2.7
[0.2.6]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.5...0.2.6
[0.2.5]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.4...0.2.5
[0.2.4]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.3...0.2.4
[0.2.3]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.2...0.2.3
[0.2.2]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.1...0.2.2
[0.2.1]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.0...0.2.1
[0.2.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.1.0...0.2.0
