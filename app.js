import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import "dotenv/config";
import { setupMaestroRoutes } from "./setup/routeMaestroSetup.js";
import { createUnicatRouter } from "./routes/fichas/unicat.js";

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by");

setupMaestroRoutes(app);
app.use("/unicat", createUnicatRouter());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
