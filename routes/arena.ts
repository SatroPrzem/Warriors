import { Router } from "express";

export const arenaRouter = Router();

arenaRouter
  .get("/", (req, res) => {
    res.send("Welcome to the arena!");
  })
  .post("/", (req, res) => {
    res.send("OH GODS! FFIGHT");
  });
