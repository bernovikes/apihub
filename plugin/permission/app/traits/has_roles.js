const model_has_role = require('../model/model_has_role');
const role = require('../model/role');
const obj = {
  init(app, mode) {
    mode.belongsToMany(role(app), {
      through: 'model_has_roles',
      as: 'ModelHasRole',
      timestamps: false,
      foreignKey: 'model_id',
      otherKey: 'role_id'
    });
  },
  async modelHasRole() {
    // const instance = obj.app.permission;
    // obj.User.belongsToMany(instance.role, {
    //   through: 'model_has_roles',
    //   as: 'ModelHasRole',
    //   foreignKey: 'role_id',
    //   otherKey: 'model_id'
    // });
    // const a = await instance.modelHasRole.findAll();
  }
};
module.exports = obj;
