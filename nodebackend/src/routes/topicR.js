const route = require("express").Router();

const { topics } = require("../controller/topic");

route.get("/topic", topics.get);
route.post("/topic", topics.create);
route.put("/topic/:id", topics.update);

module.exports = route;
