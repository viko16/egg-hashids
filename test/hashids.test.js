'use strict';

const mock = require('egg-mock');
const { assert } = require('egg-mock/bootstrap');

describe('test/hashids.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/hashids-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should have app.hashids', () => {
    assert(app.hashids);
    assert(app.hashids.encode);
    assert(app.hashids.decode);
    assert(app.hashids.encodeHex);
    assert(app.hashids.decodeHex);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect({ id: 'KX2D7M1aBl' })
      .expect(200)
      .then(res => {
        assert(app.hashids.decode(res.body.id)[0] === 666);
      });
  });
});
