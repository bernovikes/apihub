const { notEmpty } = require('./utils');
module.exports = {
  description: 'build package',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'build plugin name please',
      validate: notEmpty('name')
    },
  ],
  actions: data => {
    const name = data.name;
    return [
      {
        type: 'build',
        path: `package/${name}`
      }
    ];
  }
};
