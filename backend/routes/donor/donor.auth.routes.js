import express from "express";

import {
  donorLogin,
  donorLogout,
  donorRegistration,
} from "../../controller/donor/donor.auth.controllers.js";

const router = express.Router();

//general routes
router.post("/registration", donorRegistration);
router.post("/login", donorLogin);
router.post("/logout", donorLogout);

export default router;
