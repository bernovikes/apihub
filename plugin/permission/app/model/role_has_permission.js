'use strict';
module.exports = app => {
  const { INTEGER, DATE, Model } = app.Sequelize;

  class RoleHasPermission extends Model {

  }

  RoleHasPermission.init({
    permission_id: {
      type: INTEGER,
      primaryKey: true,
      onDelete: 'cascade',
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
    role_id: {
      type: INTEGER,
      primaryKey: true,
      onDelete: 'cascade',
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    created_at: DATE,
    deleted_at: DATE,
    updated_at: DATE
  }, { sequelize: app.model, modelName: 'RoleHasPermission' });
  return RoleHasPermission;
};
