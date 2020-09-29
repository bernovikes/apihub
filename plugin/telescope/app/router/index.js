module.exports = app => {
  const { router } = app.lib;
  router.get('/telescope/request', app.telescope.controller.request.index, app);
};
