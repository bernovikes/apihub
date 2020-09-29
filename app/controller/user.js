'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const all = await ctx.model.User.findOne({ model: 'ModelHasRole' });
    const a = await  all.getModelHasRole()
    const b =  await a[0].getRoleHasPermission()
  }
}

module.exports = UserController;
