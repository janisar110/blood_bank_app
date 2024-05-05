import express from "express";
import {
  donorDonateNow,
  getDonations,
  getDonors,
} from "../../controller/donor/donor.donate.controllers.js";

const router = express.Router();

//general routes
router.post("/donatenow", donorDonateNow);

//other routes

//get donors list
router.get("/getdonors", getDonors);

//get donations list
router.get("/getdonations", getDonations);

export default router;
