const path = require("path");
const {
  configEngine,
  connectMongoose,
  includesRoutes,
} = require("./config/engine");
const errorHandler = require("./middlewares/error");

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

// ErrorHandler middleWare
app.use(errorHandler);

// 404 error page
app.use("/*", (req, res) => {
  res.render("404");
});

// Previous ErrorResponse

// This is a 404 Middleware Function
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// Middleware
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   });
// });
