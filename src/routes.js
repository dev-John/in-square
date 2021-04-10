import { Router } from "express";
import { getMeterPrice } from "./services/pricing.js";

const routes = Router();

routes.get("/", (req, res) => res.send("Welcome to the in-square API"));

routes.get("/get-meter-price", (req, res) => {
  console.log("HERE");
  const value = getMeterPrice();

  res.send({ value });
});

export { routes };
