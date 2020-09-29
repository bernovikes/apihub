'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: STRING,
    last_login_at: DATE,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE
  });
  return User;
};
