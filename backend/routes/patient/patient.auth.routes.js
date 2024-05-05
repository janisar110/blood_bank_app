import express from "express";

import {
  patientLogin,
  patientLogout,
  patientRegistration,
} from "../../controller/patient/patient.auth.controllers.js";

const router = express.Router();

//general routes
router.post("/registration", patientRegistration);
router.post("/login", patientLogin);
router.post("/logout", patientLogout);

export default router;
