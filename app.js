const fs = require('fs');
const path = require('path');
const loadController = require('./core/methodToMiddleware');
const app_name = fs.readdirSync('package');
module.exports = app => {
  const core_directory = path.join(app.config.baseDir, `core/utils`);
  app.loader.loadToApp(core_directory, 'lib');
  const controller_directory = path.join(app.config.baseDir, `package`);
  app.loader.loadToApp(controller_directory, 'microservice', {
    initializer(obj, opt) {
      const path_name = opt.pathName;
      if (path_name.match('controller')) {
        return loadController(obj, opt);
      }
      if (path_name.match('router')) {
        return { router: obj };
      }
      if (path_name.match('models')) {
        if (typeof obj === 'function') {
          return obj(app);
        }
      }
    }
  });
};


