import { Router } from "express";

export const hallOfFame = Router();

hallOfFame.get("/", (req, res) => {
  res.render("hall-of-fame/list");
});
