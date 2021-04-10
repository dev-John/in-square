import express from "express";
import cors from "cors";

import { routes } from "./routes.js";
import { handleError } from "./utils/error-handler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err, res) => {
  handleError(err, res);
});

app.listen(process.env.PORT || 3333);

console.log("Server running on 3333");

process.on("unhandledRejection", (err) => {
  console.log(err);

  throw new Error("Ocorreu um erro na execução do servidor");
});
