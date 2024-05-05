import express from "express";

import { adminLogin, adminLogout } from "../../controller/admin/admin.auth.controllers.js"


const router = express.Router();




//general routes
router.post('/login',adminLogin)
router.post('/logout',adminLogout);



export default router