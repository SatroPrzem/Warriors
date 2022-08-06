import { WarriorRecord } from "../records/warrior.record";

export const fight = (
  warrior1: WarriorRecord,
  warrior2: WarriorRecord
): {
  log: string[];
  winner: WarriorRecord;
} => {
  const log: string[] = [];

  const warrior1Obj = {
    hp: warrior1.stamina * 10,
    dp: warrior1.defence,
    warrior: warrior1,
  };

  const warrior2Obj = {
    hp: warrior2.stamina * 10,
    dp: warrior2.defence,
    warrior: warrior2,
  };

  let attacker = warrior1Obj;
  let defender = warrior2Obj;

  do {
    const attackStrength = attacker.warrior.power;

    log.push(
      `"${attacker.warrior.name}" spojrzy się na "${defender.warrior.name}" z siłą ${attackStrength}.`
    );

    // DP: 5, HP: 5, attackStrength = 7

    if (defender.dp + defender.warrior.agility > attackStrength) {
      log.push(
        `"${defender.warrior.name}" broni się przed "${attacker.warrior.name}".`
      );

      defender.dp -= attackStrength;

      // DP: -2, HP: 5

      if (defender.dp < 0) {
        log.push(
          `"${attacker.warrior.name}" przełamał obronę "${
            defender.warrior.name
          } zadając mu ${-defender.dp} obrażeń.`
        );
        defender.hp += defender.dp;
        log.push(`""${defender.warrior.name}"" zostało ${defender.hp}`);
        // HP = 5 - 2 = 3
      }
    } else {
      log.push(
        `"${attacker.warrior.name}" wali za ${attackStrength} obrażeń "${defender.warrior.name}".`
      );
      defender.hp -= attackStrength;
      log.push(`"${defender.warrior.name}" zostało ${defender.hp} `);
    }

    [defender, attacker] = [attacker, defender];
  } while (attacker.hp > 0);

  const winner = defender.warrior;
  log.push(
    `"${winner.name}" zwyciężył, BRAVO dla tego zawodnika!!!\n CO ZA STYL!`
  );

  // console.log(log);
  return {
    log,
    winner,
  };
};
