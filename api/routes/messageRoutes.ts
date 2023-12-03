// messageRoutes.ts

import express from "express";
import messageController from "../controllers/messageController";

const router = express.Router();

router.post("/", messageController.createMessage);
router.get("/", messageController.getMessages);

export default router;
