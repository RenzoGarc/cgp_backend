import { Router } from "express";

import { EstadoCivilController } from "../../controllers/maestros/estadoCivil.js";
import {} from "../../controllers/maestros/estadoCivil.js";

export const createEstadoCivilRouter = () => {
  const EstadoCivilRouter = Router();
  //CAMBIAR
  const estadoCivilController = new EstadoCivilController();

  EstadoCivilRouter.get("/", estadoCivilController.getAll);
  EstadoCivilRouter.get("/:id", estadoCivilController.getById);
  EstadoCivilRouter.post("/", estadoCivilController.create);
  EstadoCivilRouter.delete("/:id", estadoCivilController.delete);
  EstadoCivilRouter.put("/:id", estadoCivilController.update);

  return EstadoCivilRouter;
};

export const createPagoRouter = () => {};
