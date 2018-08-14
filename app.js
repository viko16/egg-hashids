'use strict';

const factory = require('./lib/hashids');

module.exports = app => {
  if (app.config.hashids.app) factory(app);
};
