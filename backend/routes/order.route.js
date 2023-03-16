import express from "express";
import { getOrders, intent, confirm } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const route = express.Router();
route.get("/", verifyToken, getOrders);
// route.post("/:gigId", verifyToken, createOrder);
route.post("/create-payment-intent/:id", verifyToken, intent);
route.put("/", verifyToken, confirm);
export default route;
