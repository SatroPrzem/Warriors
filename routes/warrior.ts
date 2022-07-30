import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";
import { ValidationError } from "../util/error";

export const warriorRouter = Router();

warriorRouter
  .get("/add-form", (req, res) => {
    res.render("warrior/add-form");
  })
  .post("/", async (req, res) => {
    if (await WarriorRecord.nameIsTaken(req.body.name)) {
      throw new ValidationError(
        `Imię "${req.body.name}" jest już zajęte. Wybierz inne`
      );
    }
    const body = {
      ...req.body,
      power: Number(req.body.power),
      defence: Number(req.body.defence),
      stamina: Number(req.body.stamina),
      agility: Number(req.body.agility),
    };
    const warrior = new WarriorRecord(body);
    await warrior.insert();
    res.render("warrior/warrior-added", {
      name: warrior.name,
      id: warrior.id,
    });
  });
