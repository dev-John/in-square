import { Router } from "express";
import { getMeterPrice } from "./services/pricing.js";

const routes = Router();

/**
 * @swagger
 * /:
 *  get:
 *    description: Welcome route
 *    responses:
 *      '200':
 *        description: Welcome to the in-square API
 */
routes.get("/", (req, res) => res.send("Welcome to the in-square API"));

/**
 * @swagger
 * /get-meter-price:
 *  get:
 *    description: Get the square meter price
 *    responses:
 *      '200':
 *        description: Success
 */
routes.get("/get-meter-price", (req, res) => {
  const value = getMeterPrice();

  res.send({ value });
});

export { routes };
