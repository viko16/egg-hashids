# egg-hashids

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-hashids.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-hashids
[travis-image]: https://img.shields.io/travis/viko16/egg-hashids.svg?style=flat-square
[travis-url]: https://travis-ci.org/viko16/egg-hashids
[codecov-image]: https://img.shields.io/codecov/c/github/viko16/egg-hashids.svg?style=flat-square
[codecov-url]: https://codecov.io/github/viko16/egg-hashids?branch=master
[david-image]: https://img.shields.io/david/viko16/egg-hashids.svg?style=flat-square
[david-url]: https://david-dm.org/viko16/egg-hashids
[snyk-image]: https://snyk.io/test/npm/egg-hashids/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-hashids
[download-image]: https://img.shields.io/npm/dm/egg-hashids.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-hashids

> [hashids.js](https://github.com/ivanakimov/hashids.js) plugin for egg

## Install

```bash
$ npm i egg-hashids --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.hashids = {
  enable: true,
  package: 'egg-hashids',
};
```

## Configuration

For more information, please read [hashids.js](https://github.com/ivanakimov/hashids.js) document.

```js
// {app_root}/config/config.default.js
exports.hashids = {
  projectName: '',
  minLength: 0,
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',

  app: true,
  agent: false,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
this.app.hashids.encode(1);   // => jR
this.app.hashids.decode('jR') // => [ 1 ]
```

## Questions & Suggestions

Please open an issue [here](https://github.com/viko16/egg-hashids/issues).

## License

[MIT](LICENSE)
