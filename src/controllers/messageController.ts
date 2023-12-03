// messageController.ts

import { Request, Response } from "express";

// Simulating a message store. In a real application, this would interact with a database.
let messages: string[] = [];

export const createMessage = (req: Request, res: Response): void => {
  const { message } = req.body;
  console.log("New message: ", message);
  if (!message) {
    res.status(400).send("No message provided");
    return;
  }
  messages.push(message);
  res.status(201).send(`Message added successfully`);
};

export const getMessages = (_req: Request, res: Response): void => {
  console.log("Messages: ", messages);
  res.status(200).json(messages);
};

const messageController = {
  createMessage,
  getMessages,
};

export default messageController;
