const fs = require('fs');
const path = require('path');
const egg = require('egg');

function loadPackage() {
  const base = path.dirname(path.dirname(__dirname));
  const package_path = `${base}/package`;
  const root = fs.readdirSync(package_path);
  const config = [];
  root.map(item => {
    const path = `${package_path}/${item}`;
    const json = require(`${path}/init.json`);
    json['path'] = path;
    config.push(json);
  });
  return config;
}

module.exports = {
  loadPackage: loadPackage
};
