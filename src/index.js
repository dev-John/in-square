import express from "express";
import cors from "cors";

import { routes } from "./routes.js";
import { handleError } from "./utils/error-handler.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/swagger.js";

const app = express();

const swaggerDocument = await swaggerJsDoc(swaggerOptions);
const port = process.env.PORT || 3333;

app.use(
  "/documentation",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);
app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err, res) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);

  throw new Error("Ocorreu um erro na execução do servidor");
});
