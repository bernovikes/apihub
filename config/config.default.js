/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595580813441_5548';

  // add your middleware config here
  config.middleware = [ 'requestLog' ];

  // add your user config here
  const userConfig = {
    logview: {},
    security: {
      csrf: {
        enable: false,
      }
    },
    jwt: {
      secret: '123456'
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'apihub',
      host: 'localhost',
      port: 3306,
      username: 'dbadmin',
      password: 'dbadmin',
    }
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
