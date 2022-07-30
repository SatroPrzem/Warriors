import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  database: "arena_f2f",
  namedPlaceholders: true,
  decimalNumbers: true,
});
