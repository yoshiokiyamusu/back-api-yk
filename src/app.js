import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.js";
import blogsRoutes from "./routes/blogs.js";

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

app.set("port", 3320);
app.use(tasksRoutes);
app.use(blogsRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
/*
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);
*/
export default app;