import express from "express";
import { getOrder } from "../controllers/order.controller.js";
const route=express.Router();
route.get('/',getOrder)
export default route