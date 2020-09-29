const { notEmpty } = require('./utils');
module.exports = {
  description: 'generate micro service plugin  template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'plugin name please',
      validate: notEmpty('name')
    },
  ],
  actions: data => {
    const name = data.name;
    return [
      {
        type: 'copy',
        path: `package/${name}`,
        copyPath: 'template/package'
      }
    ];
  }
};
