import { Router } from "express";

export const hallOfFame = Router();

hallOfFame.get("/", (req, res) => {
  res.send("Hall of fame... \nList of the graatest warriors");
});
