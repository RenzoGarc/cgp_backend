import { Router } from "express";

import { MultaFraccionController } from "../../controllers/maestros/multaFraccion.js";
import {} from "../../controllers/maestros/multaFraccion.js";

export const createMultaFraccionRouter = () => {
  const MultaFraccionRouter = Router();
  //CAMBIAR
  const multaFraccionController = new MultaFraccionController();

  MultaFraccionRouter.get("/", multaFraccionController.getAll);
  MultaFraccionRouter.get("/:id", multaFraccionController.getById);
  MultaFraccionRouter.post("/", multaFraccionController.create);
  MultaFraccionRouter.delete("/:id", multaFraccionController.delete);
  MultaFraccionRouter.put("/:id", multaFraccionController.update);

  return MultaFraccionRouter;
};
