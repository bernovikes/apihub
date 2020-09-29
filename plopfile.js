const packageGenerate = require('./plop/packageGenerate');
const buildPackage = require('./plop/buildPackage');
const localInstall = require('./plop/localInstall');
const compressing = require('compressing');
const fs = require('fs-extra');
const path = require('path');
module.exports = (plop) => {
  plop.setActionType('copy', function(answers, config, plop) {
    fs.copy(config.copyPath, config.path)
      .then(res => {
        const migrationPath = path.resolve('database/migrations', answers.name);
        const appConfig = path.resolve('app/config', 'config.json');
        const json = `${config.path}/init.json`;
        const exp = { config: appConfig, 'migrations-path': migrationPath };
        const js = `module.exports = ${JSON.stringify(exp)}`;
        const file = fs.readJsonSync(json);
        file.name = answers.name;
        fs.writeJsonSync(json, file);
        fs.outputFile(`${config.path}/.sequelizerc`, js);
      });
  });
  plop.setActionType('build', function(answers, config, plop) {
    const pack = `${config.path}`;
    const distPath = `dist/${answers.name}`;
    fs.copy(config.path, distPath)
      .then(res => {
        const migrationPath = path.resolve('database/migrations', answers.name);
        if (fs.pathExistsSync(migrationPath)) {
          fs.copy(migrationPath, `${distPath}/migrations`)
            .then(res => {
              compressing.zip.compressDir(distPath, `dist/${answers.name}.zip`)
                .then(res => {
                  fs.removeSync(distPath);
                });
            });
        } else {
          compressing.zip.compressDir(distPath, `dist/${answers.name}.zip`)
            .then(res => {
              fs.removeSync(distPath);
            });
        }
      });
  });
  plop.setActionType('local_install', function(answers, config, plop) {
    compressing.zip.uncompress(answers.path, config.package);
  });
  plop.setGenerator('package', packageGenerate);
  plop.setGenerator('install:local', localInstall);
  plop.setGenerator('build:package', buildPackage);
};
