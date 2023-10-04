import { Router } from "express";

import { ReciboController } from "../../controllers/maestros/recibo.js";
import {} from "../../controllers/maestros/recibo.js";

export const createReciboRouter = () => {
  const ReciboRouter = Router();
  //CAMBIAR
  const reciboController = new ReciboController();

  ReciboRouter.get("/", reciboController.getAll);
  ReciboRouter.get("/:id", reciboController.getById);
  ReciboRouter.post("/", reciboController.create);
  ReciboRouter.delete("/:id", reciboController.delete);
  ReciboRouter.put("/:id", reciboController.update);

  return ReciboRouter;
};
