const init = require('./init.json');
const appname = init.name;
module.exports = {
  model() {
    const { app: { microservice } } = this;
    return microservice[appname]['models'];
  },
  controller() {
    const { microservice } = this;
    return microservice[appname]['controller'];
  }
};

