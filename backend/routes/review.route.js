import express from "express";
import {
  getReviews,
  createReview,
  deleteReview,
} from "../controllers/review.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const route = express.Router();
route.get("/:gigId", getReviews);
route.post("/", verifyToken, createReview);
route.delete("/:id", verifyToken, deleteReview);
export default route;
