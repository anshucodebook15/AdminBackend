const path = require("path");
const {
  configEngine,
  connectMongoose,
  includesRoutes,
} = require("./config/engine");
const apiErrorhandler = require("./errors/apiErrorHandler");

// const errorHandler = require("./middlewares/error");

// Start Engine
const { app } = configEngine();

// connect mongoose
connectMongoose(app);

//  Set View Path
app.set("views", path.join(__dirname, "views"));

// Inculde Routes
includesRoutes(app);

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});


app.use(apiErrorhandler);

// 404 error page
app.use("/*", (req, res) => {
  res.render("404");
});


// ErrorHandler middleWare
// app.use(errorHandler);

// app.use((err, req, res, next) => {
//   res.status(400).json({
//     error: err,
//   });
// });