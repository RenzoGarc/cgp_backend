import { Router } from "express";

import { SancionController } from "../../controllers/maestros/sancion.js";
import {} from "../../controllers/maestros/sancion.js";

export const createSancionRouter = () => {
  const SancionRouter = Router();
  //CAMBIAR
  const sancionController = new SancionController();

  SancionRouter.get("/", sancionController.getAll);
  SancionRouter.get("/:id", sancionController.getById);
  SancionRouter.post("/", sancionController.create);
  SancionRouter.delete("/:id", sancionController.delete);
  SancionRouter.put("/:id", sancionController.update);

  return SancionRouter;
};
