const path = require('path');
const loadController = require('../../core/methodToMiddleware');
module.exports = app => {
  const directory = path.join(app.config.baseDir, `./plugin/telescope/app`);
  app.loader.loadToApp(directory, 'telescope', {
    initializer(obj, opt) {
      const path_name = opt.pathName;
      if (path_name.match('controller')) {
        return loadController(obj, opt);
      }
      if (path_name.match('router')) {
        return { router: obj };
      }
      if (path_name.match('model')) {
        if (typeof obj === 'function') {
          return obj(app);
        }
      }
    }
  });
};
