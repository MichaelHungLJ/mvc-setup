class BaseController {
  constructor(model) {
    this.model = model;
  }

  testRoute(req, res) {
    return res.send("Test router is hit!");
  }
}

module.exports = BaseController;
