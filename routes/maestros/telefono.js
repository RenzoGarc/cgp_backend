import { Router } from "express";

import { TelefonoController } from "../../controllers/maestros/telefono.js";
import {} from "../../controllers/maestros/telefono.js";

export const createTelefonoRouter = () => {
  const TelefonoRouter = Router();
  //CAMBIAR
  const telefonoController = new TelefonoController();

  TelefonoRouter.get("/", telefonoController.getAll);
  TelefonoRouter.get("/:id", telefonoController.getById);
  TelefonoRouter.post("/", telefonoController.create);
  TelefonoRouter.delete("/:id", telefonoController.delete);
  TelefonoRouter.put("/:id", telefonoController.update);

  return TelefonoRouter;
};
