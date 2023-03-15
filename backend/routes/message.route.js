import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();
router.get("/:convId", verifyToken, getMessages);
router.post("/", verifyToken, createMessage);
export default router;
