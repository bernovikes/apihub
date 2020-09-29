'use strict';
module.exports = app => {
  const { INTEGER, DATE, Model, STRING, BIGINT } = app.Sequelize;

  class ModelHasRole extends Model {

  }

  ModelHasRole.init({
    role_id: {
      type: INTEGER, primaryKey: true, autoIncrement: true,
      onDelete: 'cascade',
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    model_type: STRING,
    model_id: {
      type: BIGINT, primaryKey: true
    }
  }, { sequelize: app.model, modelName: 'ModelHasRole', timestamps: false });
  return ModelHasRole;
};
