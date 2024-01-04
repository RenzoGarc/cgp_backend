import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import "dotenv/config";
import { setupMaestroRoutes } from "./setup/routeMaestroSetup.js";
import { createIngresosRouter } from "./routes/ingresosRouter.js";
import { createEgresosRouter } from "./routes/egresosRouter.js";
import { createCertificadosRouter } from "./routes/certificados.js";
import { createAuthenticateRouter } from "./routes/security/authenticate.js";

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by");
setupMaestroRoutes(app);

app.use("/ingresos", createIngresosRouter());

//s//
app.use("/egresos/detail", createEgresosRouter());

app.use("/certificados/detail", createCertificadosRouter());

app.use("/security", createAuthenticateRouter());

//

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
