import express from "express";
import * as dotenv from "dotenv";

import { connectToDB } from "./config/db.config.js";
import { menuRouter } from "./Routes/menu.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/menu", menuRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running on port${process.env.PORT}`);
});
