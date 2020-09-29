'use strict';
const Controller = require('egg').Controller;
const helper = require('../helper');

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const model = helper.model.apply(this);
    const a = await model.user.findAll();
    ctx.body = a;
  }
}

module.exports = LoginController;
