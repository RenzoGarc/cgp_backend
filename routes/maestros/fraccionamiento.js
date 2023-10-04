import { Router } from "express";

import { FraccionamientoController } from "../../controllers/maestros/fraccionamiento.js";
import {} from "../../controllers/maestros/fraccionamiento.js";

export const createFraccionamientoRouter = () => {
  const FraccionamientoRouter = Router();
  //CAMBIAR
  const fraccionamientoController = new FraccionamientoController();

  FraccionamientoRouter.get("/", fraccionamientoController.getAll);
  FraccionamientoRouter.get("/:id", fraccionamientoController.getById);
  FraccionamientoRouter.post("/", fraccionamientoController.create);
  FraccionamientoRouter.delete("/:id", fraccionamientoController.delete);
  FraccionamientoRouter.put("/:id", fraccionamientoController.update);

  return FraccionamientoRouter;
};
