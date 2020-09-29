const helper = require('../helper');
module.exports = app => {
  const { router } = app.lib;
  const controller = helper.controller.apply(app);
  router.get('/login', controller.login.index, app);
};
