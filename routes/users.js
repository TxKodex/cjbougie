import express from "express";
import { prisma } from "../prisma/client.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default router;
