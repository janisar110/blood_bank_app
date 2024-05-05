import express from "express";
import {
  getBloodNeeds,
  getPatients,
  patientBloodNeed,
} from "../../controller/patient/patient.bloodneed.controllers.js";

const router = express.Router();

//general routes
router.post("/bloodneed", patientBloodNeed);

//other routes

//get patients list
router.get("/getpatients", getPatients);

//get bloodneed list
router.get("/getbloodneeds", getBloodNeeds);

export default router;
