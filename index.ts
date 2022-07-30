import * as express from "express";
import "express-async-errors";
import * as methodOverride from "method-override";
import { static as eStatic, urlencoded } from "express";
import { engine } from "express-handlebars";
import { homeRouter } from "./routes/home";
import { warriorRouter } from "./routes/warrior";
import { arenaRouter } from "./routes/arena";
import { hallOfFame } from "./routes/hall-of-fame";
import { WarriorRecord } from "./records/warrior.record";
import "./util/maria-db";
import { handleError } from "./util/error";

const PORT = 3000;
const app = express();
app.use(eStatic("public"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    // helpers: ????,
  })
);
app.set("view engine", ".hbs");
app.use(methodOverride("_method"));
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/", homeRouter);
app.use("/warrior", warriorRouter);
app.use("/arena", arenaRouter);
app.use("/hall-of-fame", hallOfFame);

app.use(handleError);
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
