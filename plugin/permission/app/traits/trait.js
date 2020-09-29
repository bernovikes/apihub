const mixinTrait = function(target, source, app, model) {
  source.app = app;
  source[model.name] = model;
  Object.values(source)
    .map(item => {
      target[item.name] = item;
    });
  if (source.hasOwnProperty('init')) {
    source.init(app,model);
  }
};
module.exports = mixinTrait;
