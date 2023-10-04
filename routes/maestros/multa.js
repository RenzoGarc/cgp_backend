import { Router } from "express";

import { MultaController } from "../../controllers/maestros/multa.js";
import {} from "../../controllers/maestros/multa.js";

export const createMultaRouter = () => {
  const MultaRouter = Router();
  //CAMBIAR
  const multaController = new MultaController();

  MultaRouter.get("/", multaController.getAll);
  MultaRouter.get("/:id", multaController.getById);
  MultaRouter.post("/", multaController.create);
  MultaRouter.delete("/:id", multaController.delete);
  MultaRouter.put("/:id", multaController.update);

  return MultaRouter;
};
