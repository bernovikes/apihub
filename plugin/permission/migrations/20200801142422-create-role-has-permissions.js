'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role_has_permissions', {
      permission_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'cascade',
        references: {
          model: 'permissions',
          key: 'id'
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'cascade',
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role_has_permissions');
  }
};
