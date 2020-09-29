'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx.state.user;
  }

  async sign() {
    const { ctx, app } = this;
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    ctx.body = token;
  }
}

module.exports = HomeController;
