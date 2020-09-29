'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, microservice, telescope } = app;
  router.get('/', app.jwt, controller.home.index);
  router.get('/permission', controller.permission.index);
  router.get('/sign', controller.home.sign);
  router.get('/user', controller.user.index);
  router.get('/package/local', controller.package.localPackage);
  router.get('/route/list', controller.router.list);

  Object.values(microservice).concat([telescope]).map(item => {
      Object.values(item.router)
        .map(route => {
          route.router(app);
        });
    });
};
