import express from "express";
import Product from "../model/Product.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const product = await Product.find(); //object documet mapping(odom)
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
