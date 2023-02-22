import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  comida: { type: String, required: true },
  imagem: { type: String, required: true },
  preço: { type: Number, required: true },
  serve: { type: String, required: true },
});

export const MenuModel = model("Menu", menuSchema);
