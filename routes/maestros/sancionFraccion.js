import { Router } from "express";

import { SancionFraccionController } from "../../controllers/maestros/sancionFraccion.js";
import {} from "../../controllers/maestros/sancionFraccion.js";

export const createSancionFraccionRouter = () => {
  const SancionFraccionRouter = Router();
  //CAMBIAR
  const sancionFraccionController = new SancionFraccionController();

  SancionFraccionRouter.get("/", sancionFraccionController.getAll);
  SancionFraccionRouter.get("/:id", sancionFraccionController.getById);
  SancionFraccionRouter.post("/", sancionFraccionController.create);
  SancionFraccionRouter.delete("/:id", sancionFraccionController.delete);
  SancionFraccionRouter.put("/:id", sancionFraccionController.update);

  return SancionFraccionRouter;
};
