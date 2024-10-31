import express from "express";
import bodyParser from "body-parser";
import kpiRoutes from "./routes/kpi.js";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// Confugurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/kpi", kpiRoutes);
const conn = mongoose
  .connect("mongodb://127.0.0.1:27017/Dashboard")
  .then(async () => {
    app.listen(3000, (req, res) => {
      console.log("Server is running on port 3000");
    });
    console.log(`Mongodb is connected on localhost} `);
  })
  .catch((error) => {
    console.log(`Error:${error.message}`);
  });
