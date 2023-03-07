import express from "express";
import { getConversation } from "../controllers/conversation.controller.js";
const router = express.Router();
router.get("/", getConversation);
export default router;
