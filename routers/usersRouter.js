const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }

  routes() {
    router.post("/signUp", this.controller.signUp.bind(this.controller));
    router.use(this.auth);

    router.post("/login", this.controller.logIn.bind(this.controller));

    router.get("/test", this.controller.testRoute.bind(this.controller));

    return router;
  }
}

module.exports = UsersRouter;
