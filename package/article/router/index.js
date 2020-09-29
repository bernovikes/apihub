const helper = require('../helper');
module.exports = app => {
  const { router } = app.lib;
  const controller = helper.controller.apply(app);
  /**
   * const { router } = app.lib;
   * const controller = helper.controller.apply(app);
   router.get('/login', controller.login.index, app);
   *?
   */
  router.get('/article/list', controller.article.index, app);
  router.get('/article/:id', controller.article.show, app);
  router.post('/article', controller.article.store, app);
  router.delete('/article/:id', controller.article.destroy, app);
};
