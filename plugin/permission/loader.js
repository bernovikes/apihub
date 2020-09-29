const path = require('path');
module.exports = app => {
  const directory = path.join(app.config.baseDir, `./plugin/permission/app/model`);
  app.loader.loadToApp(directory, 'permission', {
    initializer(obj, opt) {
      if (typeof obj === 'function') {
        return obj(app);
      }
    }
  });
};
