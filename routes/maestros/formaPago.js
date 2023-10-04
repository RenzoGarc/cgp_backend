import { Router } from "express";

import { FormaPagoController } from "../../controllers/maestros/formaPago.js";
import {} from "../../controllers/maestros/formaPago.js";

export const createFormaPagoRouter = () => {
  const FormaPagoRouter = Router();
  //CAMBIAR
  const formaPagoController = new FormaPagoController();

  FormaPagoRouter.get("/", formaPagoController.getAll);
  FormaPagoRouter.get("/:id", formaPagoController.getById);
  FormaPagoRouter.post("/", formaPagoController.create);
  FormaPagoRouter.delete("/:id", formaPagoController.delete);
  FormaPagoRouter.put("/:id", formaPagoController.update);

  return FormaPagoRouter;
};
