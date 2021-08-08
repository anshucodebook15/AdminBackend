const route = require("express").Router();

const { quote } = require("../controller/quote");

route.get("/quote", quote.get);
route.post("/quote", quote.create);
// route.put("/quote/:id", author.update);

module.exports = route;
