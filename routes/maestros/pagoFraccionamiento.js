import { Router } from "express";

import { PagoFraccionamientoController } from "../../controllers/maestros/pagoFraccionamiento.js";
import {} from "../../controllers/maestros/pagoFraccionamiento.js";

export const createPagoFraccionamientoRouter = () => {
  const PagoFraccionamientoRouter = Router();
  //CAMBIAR
  const pagoFraccionamientoController = new PagoFraccionamientoController();

  PagoFraccionamientoRouter.get("/", pagoFraccionamientoController.getAll);
  PagoFraccionamientoRouter.get("/:id", pagoFraccionamientoController.getById);
  PagoFraccionamientoRouter.post("/", pagoFraccionamientoController.create);
  PagoFraccionamientoRouter.delete(
    "/:id",
    pagoFraccionamientoController.delete
  );
  PagoFraccionamientoRouter.put("/:id", pagoFraccionamientoController.update);

  return PagoFraccionamientoRouter;
};
