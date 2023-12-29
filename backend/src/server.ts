import dotenv from "dotenv";
dotenv.config();

import express, { Router } from "express";
import cors from "cors";
import vinylRouter from "./routers/vinyl.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import { dbConnect } from "./configs/database.config";
import { sample_vinyls } from "./data";
dbConnect();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/vinyls", vinylRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const port = 3000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
