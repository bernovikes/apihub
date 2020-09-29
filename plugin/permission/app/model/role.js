'use strict';
const permission = require('./permission');
const isTypeof = require('is-type-of');
module.exports = app => {
  const { STRING, INTEGER, DATE, Model } = app.Sequelize;

  class Role extends Model {
    async getStoredPermission(permissions) {
      const group = isTypeof.array(permissions) ? permissions : [ permissions ];
      return group.map(async permission => {
        if (isTypeof.int(permission)) {
          const { id } = await app.permission.permission.findByPk(permission);
          return id;
        }
        if (isTypeof.string(permission)) {
          const { id } = await app.permission.permission.findOne({ where: { name: permission } });
          return id;
        }
      });
    }

    async givePermissionTo(permission) {
      const permissions = await this.getStoredPermission(permission);
      const $this = this;
      permissions.map(async item => {
        const id = await item;
        return new Promise((resolve, reject) => {
          $this.addRoleHasPermission(id)
            .then(res => {
              resolve(res);
            })
            .catch(error => {
              reject(error);
            });
        });
      });
      return $this;
    }
  }

  Role.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    guard_name: STRING,
    created_at: DATE,
    deleted_at: DATE,
    updated_at: DATE
  }, { sequelize: app.model, modelName: 'Role' });
  Role.belongsToMany(permission(app), {
    through: 'role_has_permissions',
    as: 'RoleHasPermission',
    foreignKey: 'role_id',
    otherKey: 'permission_id'
  });
  return Role;
};
