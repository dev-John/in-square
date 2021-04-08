import { Router } from "express";

const routes = Router();

routes.get("/get-meter-price", (req, res) => {
  res.status(200).send("350");
});

export { routes };
