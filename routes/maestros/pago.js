import { Router } from "express";

import { PagoController } from "../../controllers/maestros/pago.js";
import {} from "../../controllers/maestros/pago.js";

export const createPagoRouter = () => {
  const PagoRouter = Router();
  //CAMBIAR
  const pagoController = new PagoController();

  PagoRouter.get("/", pagoController.getAll);
  PagoRouter.get("/:id", pagoController.getById);
  PagoRouter.post("/", pagoController.create);
  PagoRouter.delete("/:id", pagoController.delete);
  PagoRouter.put("/:id", pagoController.update);

  return PagoRouter;
};
