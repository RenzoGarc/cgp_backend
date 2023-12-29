import { Router } from "express";

import { EgresoController } from "../../controllers/maestros/egreso.js";
import {} from "../../controllers/maestros/egreso.js";

export const createEgresoRouter = () => {
  const EgresoRouter = Router();
  //CAMBIAR
  const egresoController = new EgresoController();

  EgresoRouter.get("/", egresoController.getAll);
  EgresoRouter.get("/colegiado/:id", egresoController.getByColegiadogetById);
  EgresoRouter.get("/:id", egresoController.getById);
  EgresoRouter.post("/", egresoController.create);
  EgresoRouter.delete("/:id", egresoController.delete);
  EgresoRouter.put("/:id", egresoController.update);

  return EgresoRouter;
};
