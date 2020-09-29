module.exports = app => {
  const { router, controller } = app;
  router.get('/login', app.package.index.index);
};
