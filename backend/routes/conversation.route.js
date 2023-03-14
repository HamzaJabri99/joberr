import express from "express";
import {
  getConversation,
  getConversations,
  updateConversation,
  createConversation,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();
router.get("/", verifyToken, getConversations);
router.get("/:id", verifyToken, getConversation);
router.post("/", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);
export default router;
