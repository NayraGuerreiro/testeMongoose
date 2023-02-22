import express from "express";
import { MenuModel } from "../models/menu.model.js";

const menuRouter = express.Router();

menuRouter.post("/", async (req, res) => {
  try {
    const novaComida = await MenuModel.create({ ...req.body });

    return res.status(201).json(novaComida);
  } catch (err) {
    console.log(err);
  }
});

export { menuRouter };
