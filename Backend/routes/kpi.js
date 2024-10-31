import express from "express";
import KPI from "../model/KPI.js";
const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find(); //object documet mapping(odom)
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
