import { Router } from "express";
import { getMeterPrice } from "./services/pricing.js";

const routes = Router();

routes.get("/get-meter-price", (req, res) => {
  const value = getMeterPrice();

  res.send({ value });
});

export { routes };
