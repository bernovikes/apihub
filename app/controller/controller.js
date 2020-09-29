const _Controller = require('egg').Controller;

class Controller extends _Controller {
  response(code, message, body) {
    return { code, message, body };
  }
}

module.exports = Controller;
