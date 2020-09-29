'use strict';
const Controller = require('./controller');
const router = require('../../run/router');
const routeResource = require('../resources/route');

class RouterController extends Controller {
  async list() {
    const { app, ctx } = this;
    ctx.body = this.response(200, '', new routeResource(router));
  }
}

module.exports = RouterController;
