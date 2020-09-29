'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('model_has_roles', {
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
      model_type: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      model_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
      }
    });
    await queryInterface.addIndex('model_has_roles', [ 'model_id', 'model_type' ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('model_has_roles');
  }
};
