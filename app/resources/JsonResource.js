const isTypeof = require('is-type-of');

class JsonResource {
  constructor(model) {
    const $this = this;
    if (isTypeof.array(model)) {
      return model.map(item => {
        return $this.toArray.apply(item);
      });
    }
  }
}

module.exports = JsonResource;
