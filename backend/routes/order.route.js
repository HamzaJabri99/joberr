import express from "express";
import { getOrders, createOrder } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const route = express.Router();
route.get("/", verifyToken, getOrders);
route.post("/:gigId", verifyToken, createOrder);
export default route;
