'use strict';

module.exports = app => {
  const { INTEGER, DATE, Model, STRING,JSON } = app.Sequelize;

  class TelescopeRequest extends Model {

  }

  TelescopeRequest.init({
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true,
    },
    ip: STRING,
    method: STRING,
    url: STRING,
    request_header: JSON,
    request_body: JSON,
    response_body: JSON,
    created_at: DATE,
    deleted_at: DATE,
    updated_at: DATE
  }, { sequelize: app.model, modelName: 'TelescopeRequest' });
  return TelescopeRequest;
};
