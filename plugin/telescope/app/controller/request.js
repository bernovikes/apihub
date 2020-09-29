const Controller = require('egg').Controller;

class RequestController extends Controller {
  async index() {
    const { ctx, app: { telescope } } = this;
    const list = await telescope.model.telescopeRequest.findAll({ attributes: [ 'method', 'url', 'id', 'created_at' ] });
    ctx.body = list;
  }
}

module.exports = RequestController;
