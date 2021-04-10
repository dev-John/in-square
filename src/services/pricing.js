import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";

const db = low(new FileSync("db.json"));

export function getMeterPrice() {
  return db.get("squareMeterValue").value();
}
