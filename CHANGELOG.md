# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

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

[0.2.5]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.4...0.2.5
[0.2.4]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.3...0.2.4
[0.2.3]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.2...0.2.3
[0.2.2]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.1...0.2.2
[0.2.1]: https://github.com/DarrenPaulWright/object-agent/compare/v0.2.0...0.2.1
[0.2.0]: https://github.com/DarrenPaulWright/object-agent/compare/v0.1.0...0.2.0
