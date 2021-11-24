"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _tasks = _interopRequireDefault(require("./routes/tasks.js"));

var _blogs = _interopRequireDefault(require("./routes/blogs.js"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
/*
import userRoutes from "./routes/users";
*/

var app = (0, _express["default"])();
app.use((0, _cors["default"])()); //para que pueda integrarse con las apps

app.use((0, _morgan["default"])("dev")); // para ver peticiones por consola

app.use(_express["default"].json()); //app.set("port", 3320);
// Settings

app.set("port", process.env.PORT || 3320);
app.use(_tasks["default"]);
app.use(_blogs["default"]);
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
/*
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);
*/

var _default = app;
exports["default"] = _default;