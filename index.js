// import useful packages
const express = require("express");

// import models
const db = require("./models/index");

// import controllers
const UsersController = require("./controllers/usersController");
const ItemsController = require("./controllers/itemsController");

// initialize controllers
const usersController = new UsersController(db.users);
const itemsController = new ItemsController(db.items);

// import routers
const UsersRouter = require("./routers/usersRouter");
const ItemsRouter = require("./routers/itemsRouter");

// initialize routers
const usersRouter = new UsersRouter(usersController).routes();
const itemsRouter = new ItemsRouter(itemsController).routes();

// Put express together below this line
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/items", itemsRouter);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
