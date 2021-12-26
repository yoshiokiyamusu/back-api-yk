import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.js";
import blogsRoutes from "./routes/blogs.js";
import payment from "./routes/payment.routes.js";
const bodyParser = require("body-parser");

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";
const specs = swaggerJSDoc(options);
/*
import userRoutes from "./routes/users";
*/
const app = express();

app.use(cors());//para que pueda integrarse con las apps
app.use(morgan("dev")); // para ver peticiones por consola
app.use(express.json());
app.use(bodyParser.json()); //application/json

//app.set("port", 3320);
// Settings
app.set("port", process.env.PORT || 3320);

app.use(tasksRoutes);
app.use(blogsRoutes);
app.use(payment);

app.use(express.static(path.join(__dirname, "public")));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


/*
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);
*/
export default app;