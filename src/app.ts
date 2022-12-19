import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handlerErrorMiddleware from "./middlewares/handler.middleware";
import cors from "cors";
import vehiclesRoutes from "./routes/vehicles.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/vehicles", vehiclesRoutes)

app.use(handlerErrorMiddleware);

export default app;
