import { Router } from "express";

import { EgresoController } from "../../controllers/maestros/egreso.js";
import {} from "../../controllers/maestros/egreso.js";

export const createEgresoRouter = () => {
  const EgresoRouter = Router();
  //CAMBIAR
  const egresoController = new EgresoController();

  EgresoRouter.get("/", egresoController.getAll);
  EgresoRouter.get("/:id", egresoController.getById);
  EgresoRouter.post("/", egresoController.create);
  EgresoRouter.delete("/:id", egresoController.delete);
  EgresoRouter.put("/:id", egresoController.update);

  // ColegiadoRouter.get("/", colegiadoController.getAll);
  // ColegiadoRouter.get(
  //   "/codigo/:codigo",
  //   colegiadoController.getColegiadoByCodigo
  // );
  // ColegiadoRouter.get("/validate/:codigo", colegiadoController.getValidate);
  // ColegiadoRouter.get("/:id", colegiadoController.getById);
  // ColegiadoRouter.post("/", colegiadoController.create);
  // ColegiadoRouter.delete("/:id", colegiadoController.delete);
  // ColegiadoRouter.put("/:id", colegiadoController.update);

  return EgresoRouter;
};
