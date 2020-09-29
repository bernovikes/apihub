'use strict';
const Controller = require('./controller');
const manage = require('../utils/manage');

class PackageController extends Controller {
  async localPackage() {
    const { ctx } = this;
    const packages = manage.loadPackage();
    ctx.body = this.response(200, '', packages);
  }
}

module.exports = PackageController;
