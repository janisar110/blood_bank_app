import express from "express";
import dbConnection from "./db/dbConnection.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import adminAuthRoutes from "./routes/admin/admin.auth.routes.js"
import patientAuthRoutes from "./routes/patient/patient.auth.routes.js"
import donorAuthRoutes from "./routes/donor/donor.auth.routes.js"
import donorDonateRoutes from "./routes/donor/donor.donate.routes.js"
import patientBloodNeedRoutes from "./routes/patient/patient.bloodneed.routes.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//routes

//auth routes 
app.use("/api/adminauth", adminAuthRoutes);
app.use("/api/patientauth", patientAuthRoutes);
app.use("/api/donorauth", donorAuthRoutes);

//donate 
app.use('/api/donor',donorDonateRoutes);

//Patient 
app.use('/api/patient',patientBloodNeedRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => {
  dbConnection();
  console.log(`Example app listening on port ${port}!`);
});
