import { Router } from "express";

import { UbigeoController } from "../../controllers/maestros/ubigeo.js";
import {} from "../../controllers/maestros/ubigeo.js";

export const createUbigeoRouter = () => {
  const UbigeoRouter = Router();
  //CAMBIAR
  const ubigeoController = new UbigeoController();

  UbigeoRouter.get("/", ubigeoController.getAll);
  UbigeoRouter.get("/:id", ubigeoController.getById);
  UbigeoRouter.post("/", ubigeoController.create);
  UbigeoRouter.delete("/:id", ubigeoController.delete);
  UbigeoRouter.put("/:id", ubigeoController.update);

  return UbigeoRouter;
};
