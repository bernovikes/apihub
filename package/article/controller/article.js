'use strict';
const Controller = require('egg').Controller;
const helper = require('../helper');

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const model = helper.model.apply(this);
    const list = await model.article.findAll();
    const query = [];
    list.map(item => {
      query.push(ctx.model.User.findByPk(item.author_id));
    });
    const users = await Promise.all(query);
    list.map((item, index) => {
      item.setDataValue('author', users[index]);
      return item;
    });
    ctx.body = list;
  }

  async store() {
    const { ctx } = this;
    const model = helper.model.apply(this);
    const list = await model.article.create(ctx.request.body);
    ctx.body = 20;
  }

  async show() {
    const { ctx } = this;
  }

  async destroy() {
    const { ctx } = this;
  }
}

module.exports = ArticleController;
