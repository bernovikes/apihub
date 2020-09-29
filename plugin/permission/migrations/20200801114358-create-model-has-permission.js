'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const table = await queryInterface.createTable('model_has_permissions', {
      permission_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        }
      },
      model_type: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      model_morph_key: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false
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
    await queryInterface.addIndex('model_has_permissions', [ 'model_morph_key', 'model_type' ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('model_has_permissions');
  }
};
