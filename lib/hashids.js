'use strict';

const Hashids = require('hashids');

module.exports = app => {
  const { projectName, minLength, alphabet } = app.config.hashids;
  app.hashids = new Hashids(projectName, minLength, alphabet);
};
