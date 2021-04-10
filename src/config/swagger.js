import dotenv from "dotenv";

dotenv.config();

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Square Meters API",
      version: "0.1.0",
      description: "An API for fetching the fix square meter value",
    },
    servers: [
      {
        url: process.env.API_HOST,
      },
    ],
  },
  apis: ["src/routes.js"],
};
