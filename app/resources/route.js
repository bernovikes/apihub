const JsonResource = require('./JsonResource');

class Route extends JsonResource {
  toArray() {
    return { path: this.path, methods: this.methods };
  }
}

module.exports = Route;
