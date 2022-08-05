import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";
import { ValidationError } from "../util/error";
import { fight } from "../util/fight";

export const arenaRouter = Router();

arenaRouter
  .get("/fight-form", async (req, res) => {
    const warriors = await WarriorRecord.listAll();
    // console.log(warriors);
    res.render("arena/fight-form", {
      warriors,
    });
  })
  .post("/fight", async (req, res) => {
    const { warrior1: warrior1Id, warrior2: warrior2Id } = req.body;
    // console.log(req.body);
    if (warrior1Id === warrior2Id) {
      throw new ValidationError("Musisz wybrać 2 róźnych wojowników");
    }

    const warrior1 = await WarriorRecord.getOne(warrior1Id);
    const warrior2 = await WarriorRecord.getOne(warrior2Id);

    if (!warrior1) {
      throw new ValidationError("Przepraszamy nie znaleziono wojownika nr. 1");
    }
    if (!warrior2) {
      throw new ValidationError("Przepraszamy nie znaleziono wojownika nr. 2");
    }
    const { log, winner } = fight(warrior2, warrior2);

    winner.wins++;
    console.log("kurwa winner", winner);
    await winner.update();
    res.render("arena/fight", {
      log,
    });
  });
