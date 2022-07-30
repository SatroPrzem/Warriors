import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";

export const hallOfFame = Router();

hallOfFame.get("/", async (req, res) => {
  const warriors = (await WarriorRecord.listTop(10)).map((warrior, index) => {
    return {
      place: index + 1,
      warrior,
    };
  });
  res.render("hall-of-fame/list", {
    warriors: warriors,
  });
});
