'use strict';
const Controller = require('egg').Controller;

class PermissionController extends Controller {
  async index() {
    const { ctx, app: { permission } } = this;
    const { request } = ctx;
    const params = {
      name: request.query.name,
      guard_name: 'web',
      deleted_at: new Date()
    };
    const role = await permission.role.create(params, { include: 'RoleHasPermission' });
    await role.givePermissionTo(1);
    ctx.body = 'hello';
  }
}

module.exports = PermissionController;
