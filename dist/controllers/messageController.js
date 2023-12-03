"use strict";
// messageController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.createMessage = void 0;
// Simulating a message store. In a real application, this would interact with a database.
let messages = [];
const createMessage = (req, res) => {
    const { message } = req.body;
    if (!message) {
        res.status(400).send("No message provided");
        return;
    }
    messages.push(message);
    res.status(201).send(`Message added successfully`);
};
exports.createMessage = createMessage;
const getMessages = (_req, res) => {
    res.status(200).json(messages);
};
exports.getMessages = getMessages;
const messageController = {
    createMessage: exports.createMessage,
    getMessages: exports.getMessages,
};
exports.default = messageController;
