import express, { Request, Response } from "express";
import path from "node:path";

const router = express.Router();

router.get(["/", "/index"], (request: Request, response: Response) => {
  if (request.accepts("text")) {
    response.type("text").send("Welcome to the mern-backend.");
    return;
  }
  response.json({ message: "MERN Starter Template" });
});

export default router;
