import { Router } from "express";

import { OperadorTelfController } from "../../controllers/maestros/operadorTelf.js";
import {} from "../../controllers/maestros/operadorTelf.js";

export const createOperadorTelfRouter = () => {
  const OperadorTelfRouter = Router();
  //CAMBIAR
  const operadorTelfController = new OperadorTelfController();

  OperadorTelfRouter.get("/", operadorTelfController.getAll);
  OperadorTelfRouter.get("/:id", operadorTelfController.getById);
  OperadorTelfRouter.post("/", operadorTelfController.create);
  OperadorTelfRouter.delete("/:id", operadorTelfController.delete);
  OperadorTelfRouter.put("/:id", operadorTelfController.update);

  return OperadorTelfRouter;
};
