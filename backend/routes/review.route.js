import express from "express"
import { getReview } from "../controllers/review.controller.js";
const route=express.Router();
route.get('/',getReview)
export default route;