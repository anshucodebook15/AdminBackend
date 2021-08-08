const route = require("express").Router();

const { author } = require("../controller/author");

route.get("/author", author.get);
route.post("/author", author.create);
route.put("/author/:id", author.update);

module.exports = route;
