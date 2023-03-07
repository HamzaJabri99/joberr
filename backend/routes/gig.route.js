import express from "express"
import { getGig } from "../controllers/gig.controller.js";
const router =express.Router();
router.get('/',getGig);
export default router;