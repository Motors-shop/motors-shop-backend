import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handlerErrorMiddleware from "./middlewares/handler.middleware";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use(handlerErrorMiddleware);

export default app;
