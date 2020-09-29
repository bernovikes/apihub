'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE, Model, JSON } = app.Sequelize;

  class Permission extends Model {
    
  }

  Permission.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    route: JSON,
    guard_name: STRING,
    created_at: DATE,
    deleted_at: DATE,
    updated_at: DATE
  }, { sequelize: app.model, modelName: 'Permission' });
  return Permission;
};
