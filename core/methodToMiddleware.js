const FULLPATH = Symbol('EGG_LOADER_ITEM_FULLPATH');
const is = require('is-type-of');
const co = require('co');

function loadController(obj, opt) {
  if (is.class(obj)) {
    obj.prototype.pathName = opt.pathName;
    obj.prototype.fullPath = opt.path;
    return wrapClass(obj);
  }
}

function wrapClass(Controller) {
  let proto = Controller.prototype;
  const ret = {};
  while (proto !== Object.prototype) {
    const keys = Object.getOwnPropertyNames(proto);
    for (const key of keys) {
      if (key === 'constructor') {
        continue;
      }
      const d = Object.getOwnPropertyDescriptor(proto, key);
      if (is.function(d.value) && !ret.hasOwnProperty(key)) {
        ret[key] = methodToMiddleware(Controller, key);
        ret[key][FULLPATH] = Controller.prototype.fullPath + '#' + Controller.name + '.' + key + '()';
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return ret;
}

async function callFn(fn, args, ctx) {
  args = args || [];
  if (!is.function(fn)) return;
  if (is.generatorFunction(fn)) fn = co.wrap(fn);
  return ctx ? fn.call(ctx, ...args) : fn(...args);
}

function methodToMiddleware(Controller, key) {
  return function classControllerMiddleware(...args) {
    const controller = new Controller(this);
    return callFn(controller[key], args, controller);
  };
}

module.exports = loadController;
