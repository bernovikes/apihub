'use strict';
const path = require('path');
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  logview: {
    package: 'egg-logview',
  },
  permission: {
    path: path.join(__dirname, '../plugin/permission')
  },
  telescope: {
    path: path.join(__dirname, '../plugin/telescope')
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
