'use strict';

const factory = require('./lib/hashids');

module.exports = agent => {
  if (agent.config.hashids.agent) factory(agent);
};
