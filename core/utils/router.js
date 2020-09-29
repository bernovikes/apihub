const routerList = [];
const router = {
  get(path, controller, app) {
    routerList.push({ url: path, method: 'get' });
    app.router.get(path, controller);
  },
  post(path, controller, app) {
    routerList.push({ url: path, method: 'post' });
    app.router.post(path, controller);
  },
  put(path, controller, app) {
    routerList.push({ url: path, method: 'put' });
    app.router.put(path, controller);
  },
  delete(path, controller, app) {
    routerList.push({ url: path, method: 'delete' });
    app.router.delete(path, controller);
  },
  resources(path, controller, app) {
    routerList.push({ url: path, method: 'resources' });
    app.router.resources(path, controller);
  },
};
module.exports = router;
