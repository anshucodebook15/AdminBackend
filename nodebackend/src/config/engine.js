require("dotenv").config({ path: "config.env" });
const express = require("express");
var cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
var cookie = require("cookie-parser");

exports.configEngine = () => {
  // Express App
  const app = express();

  //MiddleWare
  // app.use(express.static(path.join(__dirname, "../../public"))); // this includes all files in public folder with ejs templates
  app.use(express.static(path.join(__dirname, "../../dist"))); // this includes all files in public folder with ejs templates
  app.use(express.urlencoded({ extended: true })); // it will encode all the data that are comming from any response
  app.use(express.json());

  //View engine
  app.set("view engine", "ejs");

  //  Set View Path
  app.set("views", path.join(__dirname, "../views"));

  // Setting up cookie Parser
  app.use(cookie());

  // Cors
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  return { app };
};

exports.connectMongoose = (app) => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    .then((result) => {
      app.listen(process.env.PORT || 5000, () => {
        console.log("The App is Working");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.includesRoutes = (app) => {
  // Include Routes
  const authR = require("../routes/authR");
  const private = require("../routes/private");

  // Enables Routes
  app.use(authR);
  app.use(private);
};
