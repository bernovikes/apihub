'use strict';
const trait = require('../../plugin/permission/app/traits/trait');
const hasRoles = require('../../plugin/permission/app/traits/has_roles');
module.exports = app => {
  const { STRING, INTEGER, DATE, Model } = app.Sequelize;

  class User extends Model {
  }

  User.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: STRING,
    last_login_at: DATE,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE
  }, { sequelize: app.model, modelName: 'user' });
  trait(User.prototype, hasRoles, app, User);
  return User;
};
