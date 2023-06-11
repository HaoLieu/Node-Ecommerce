import express from "express";
import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await User.removeAllListeners();
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

export default seedRouter;
