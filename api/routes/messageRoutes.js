"use strict";
// messageRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = __importDefault(require("../controllers/messageController"));
const router = express_1.default.Router();
router.post("/", messageController_1.default.createMessage);
router.get("/", messageController_1.default.getMessages);
exports.default = router;
