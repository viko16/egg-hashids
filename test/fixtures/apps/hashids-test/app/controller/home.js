'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      id: this.app.hashids.encode(666),
    };
  }
}

module.exports = HomeController;
